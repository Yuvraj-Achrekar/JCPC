import React, { useState } from "react";
import {
  Camera,
  Mail,
  Hash,
  Tag,
  BookOpen,
  Activity,
  Contact,
} from "lucide-react";
import { useAuth } from "../../context/auth";
import { uploadImageApi } from "../../lib/api";
import axios from "axios";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfilesSuccess } from "../../store/profilesSlice";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Profile = () => {
  const { user, setTrigger } = useAuth();
  const profiles = useSelector((state) => state.profile.profiles);
  const dispatch = useDispatch();
  const { setRefreshTrigger } = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(user);
  const [preview, setPreview] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [progress, setProgress] = useState(userData.tag.length);

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleIssueChange = (issueType, value) => {
    setUserData((prev) => ({
      ...prev,
      issues: { ...prev.issues, [issueType]: value },
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const updatedUserData = { ...userData };

      if (imageUrl) {
        const image = await uploadImageApi(imageUrl, user.domainID);
        updatedUserData.image = image;
        setPreview(null);
        setUserData((prev) => ({ ...prev, image: image }));
      }
      const response = await axios.put(
        BASE_URL + `/api/user/${user._id}`,
        updatedUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      updatedUserData.score.current =
        updatedUserData.issues.blocker * 10 +
        updatedUserData.issues.critical * 8 +
        updatedUserData.issues.major * 5 +
        updatedUserData.issues.normal * 3 +
        updatedUserData.issues.minor * 1;
      if (response.data.success) {
        toast.success(`${response?.data?.message}`);
        setIsLoading(false);
        setIsEditing(false);
        setTrigger((prev) => !prev); // refresh user data
        dispatch(
          fetchProfilesSuccess(
            profiles.map((p) => (p._id === user._id ? updatedUserData : p))
          )
        );
        // setRefreshTrigger((prev) => !prev); //refresh profile data
      }
    } catch (error) {
      setIsLoading(false);

      setTrigger((prev) => !prev);
    }
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return setPreview(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(imageFile);
    setImageUrl(imageFile);
  };

  const handleCancel = () => {
    setUserData(user);
    setIsEditing(false);
    setPreview(null);
    setImageUrl(null);
  };

  if (isLoading) {
    return (
      <main className="h-screen w-full flex items-center justify-center">
        <div className="text-xl">Loading profile data...</div>
      </main>
    );
  }

  return (
    <div className="container mx-auto pt-12 p-6">
      <div className="space-y-6">
        <form
          onSubmit={(e) => {
            handleSave(e);
          }}
        >
          <div className="flex items-center justify-between px-6 mb-4">
            <div>
              <h1 className="text-3xl font-bold">Profile</h1>
              <p className="text-gray-600">
                Manage your account settings and preferences
              </p>
            </div>
            <div className="space-x-2">
              {isEditing ? (
                <>
                  <button
                    className="px-4 py-2 rounded-md border border-black hover:bg-gray-300 transition-colors"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  type="button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 px-6">
            {/* Personal Information Card */}

            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <div className="mb-6">
                <h2 className="text-xl font-bold">Personal Information</h2>
                <p className="text-gray-600 text-sm">
                  Update your photo and personal details
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="rounded-full object-cover w-24 h-24"
                      />
                    ) : (
                      <img
                        alt="Profile picture"
                        className="rounded-full object-cover w-24 h-24"
                        src={userData.image}
                        onError={(e) => {
                          e.target.src = "/images/profile/default.png";
                        }}
                      />
                    )}
                    {isEditing && (
                      <>
                        <label
                          htmlFor="image-upload"
                          className="absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                        >
                          <Camera className="h-4 w-4" />
                        </label>
                        <input
                          type="file"
                          id="image-upload"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{userData.name}</h3>
                    <p className="text-gray-600 text-sm">{userData.role}</p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <div className="flex items-center gap-2">
                      <Contact className="h-4 w-4 text-gray-500" />
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 cursor-not-allowed"
                        value={userData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 cursor-not-allowed"
                        value={userData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="domainID"
                      className="block text-sm font-medium mb-1"
                    >
                      Domain ID
                    </label>
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-gray-500" />
                      <input
                        id="domainID"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 cursor-not-allowed"
                        value={userData.domainID}
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Details Section */}
            <div className="scrollable-component flex flex-col overflow-y-scroll h-screen space-y-6 pb-48">
              {/* Professional Details Card */}
              <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Professional Details</h2>
                  <p className="text-gray-600 text-sm">
                    Update your role and work information
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium mb-1"
                    >
                      Role
                    </label>

                    <select
                      id="role"
                      defaultValue={userData.role}
                      className={`w-full px-3 py-2 border rounded-md disabled:bg-gray-100 ${
                        !isEditing || !user.isAdmin ? "cursor-not-allowed" : ""
                      }`}
                      onChange={(e) =>
                        handleInputChange("role", e.target.value)
                      }
                      disabled={!isEditing || !user.isAdmin}
                    >
                      <option value="">Select role</option>
                      <option value="Assistant Manager">Program Manager</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Validator">Validator</option>
                      <option value="Tester">Tester</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="tag"
                      className="block text-sm font-medium mb-1"
                    >
                      Tag
                    </label>

                    <div className="flex items-center gap-2 relative">
                      <Tag className="absolute left-2 h-4 w-4 text-gray-500" />
                      <input
                        id="tag"
                        type="text"
                        className="w-full px-8 py-2 border rounded-md disabled:bg-gray-100"
                        value={userData.tag}
                        maxLength={30}
                        onChange={(e) => {
                          handleInputChange("tag", e.target.value);
                          setProgress(e.target.value.length);
                        }}
                        disabled={!isEditing}
                      />
                      <span className="absolute right-3 top-3 text-gray-600 text-sm">
                        {30 - userData.tag.length}/30
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 h-1 mt-1 rounded">
                      <div
                        className={`bg-black h-full rounded`}
                        style={{
                          width: `${(progress / 30) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="courses"
                      className="block text-sm font-medium mb-1"
                    >
                      Courses ( separate each course with semicolon )
                    </label>
                    <div className="flex items-center gap-2 relative">
                      <BookOpen className="absolute left-2 h-4 w-4 text-gray-500" />
                      <input
                        id="courses"
                        type="text"
                        className="w-full px-8 py-2 border rounded-md disabled:bg-gray-100"
                        value={userData.courses}
                        placeholder="separate each course with semicolon"
                        onChange={(e) =>
                          handleInputChange("courses", e.target.value)
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium mb-1"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      className="w-full resize-none px-3 py-2 border rounded-md min-h-[100px] disabled:bg-gray-100"
                      value={userData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="extraActivities"
                      className="block text-sm font-medium mb-1"
                    >
                      Extra Activities ( separate each activity with semicolon )
                    </label>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-gray-500" />
                      <input
                        id="extraActivities"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100"
                        value={userData.extraActivites}
                        onChange={(e) =>
                          handleInputChange("extraActivites", e.target.value)
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Issues Card */}
              <div className="bg-white rounded-lg p-6 shadow-md flex-1">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Issues Handled</h2>
                  <p className="text-gray-600 text-sm">
                    Summary of issues you've raised
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Converts an object into an array of [key, value] pairs. */}
                  {Object.entries(userData.issues).map(([issueType, count]) => (
                    <div
                      key={issueType}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-medium capitalize">
                        {issueType}
                      </span>
                      <input
                        type="number"
                        min={0}
                        value={count}
                        onChange={(e) =>
                          handleIssueChange(issueType, e.target.valueAsNumber)
                        }
                        disabled={!isEditing || !user.isAdmin}
                        className="w-20 px-3 py-2 border rounded-md text-right disabled:bg-gray-100"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 border bg-gray-100 p-2 rounded-md">
                  <span className="text-lg font-medium capitalize">
                    Current Issues Score
                  </span>
                  <span className="w-20 px-3 py-2 border bg-white rounded-md text-center">
                    {userData.score.current}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 border bg-gray-100 p-2 rounded-md">
                  <span className="text-lg font-medium capitalize">
                    Previous Issues Score
                  </span>

                  <input
                    type="number"
                    min={0}
                    id="prevScore"
                    value={userData.score.previous}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        score: {
                          ...prevScore.score,
                          previous: e.target.valueAsNumber,
                        },
                      })
                    }
                    disabled={!isEditing || !user.isAdmin}
                    className="w-20 px-3 py-2 border bg-white rounded-md text-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
