import React, { useState } from "react";

const ManageInteraction = () => {
  const [purpose, setPurpose] = useState("");
  const [subPurpose, setSubPurpose] = useState("");
  const [status, setStatus] = useState("");
  const [escalateTo, setEscalateTo] = useState("");
  const [staffName, setStaffName] = useState("");
  const [comment, setComment] = useState("");
  const [interactionID, setInteractionID] = useState("INT0001");

  const inquiryOptions = [
    "New Booking",
    "Quick Quote",
    "Pricing Information",
    "Tax Information",
    "Shipment Schedule",
    "Collection Point Location & Opening Hours",
    "Warehouse Location & Opening Hours",
    "Pickup Schedule",
    "Others",
  ];

  const escalateOptions = [
    "CEO",
    "Director",
    "Admin Assistant",
    "Accountant AU",
    "Accountant SL",
    "Call center AU",
    "Call center SL",
    "Warehouse AU",
    "Warehouse SL",
    "Acacia Garden collection point",
    "West Pennant Hills collection",
    "Brisbane collection point",
    "Canberra collection point",
    "Assistant Driver AU",
    "Assistant Driver SL",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold bg-orange-500 p-3 text-white">Manage Interaction</h2>
      
      {/* Interaction ID (Editable Text Box) */}
      <div className="mb-4">
        <label className="block font-semibold">Interaction ID</label>
        <input
          type="text"
          value={interactionID}
          onChange={(e) => setInteractionID(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter Interaction ID"
        />
      </div>

      {/* Interaction Mode */}
      <div className="mb-4">
        <label className="block font-semibold">Interaction Mode</label>
        <select className="border p-2 w-full">
          <option>Call</option>
          <option>SMS</option>
          <option>Email</option>
          <option>WhatsApp</option>
          <option>Verbal</option>
        </select>
      </div>

      {/* Name & Phone Number */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input type="text" placeholder="Full Name" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block font-semibold">Phone Number</label>
          <input type="text" placeholder="+61" className="border p-2 w-full" />
        </div>
      </div>

      {/* Purpose */}
      <div className="mb-4 mt-4">
        <label className="block font-semibold">Purpose</label>
        <select
          className="border p-2 w-full"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        >
          <option value="">Select Purpose</option>
          <option value="New Inquiry">New Inquiry</option>
          <option value="Existing Inquiry">Existing Inquiry</option>
          <option value="Complaint">Complaint</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Sub-Purpose (Conditional Dropdown for New Inquiry) */}
      {purpose === "New Inquiry" && (
        <div className="mb-4">
          <label className="block font-semibold">New Inquiry Type</label>
          <select
            className="border p-2 w-full"
            value={subPurpose}
            onChange={(e) => setSubPurpose(e.target.value)}
          >
            <option value="">Select Type</option>
            {inquiryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold">Description</label>
        <textarea className="border p-2 w-full" rows="3" placeholder="Enter details here"></textarea>
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="block font-semibold">Status</label>
        <select
          className="border p-2 w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Resolved</option>
          <option>In-Progress</option>
          <option value="Escalate">Escalate</option>
        </select>
      </div>

      {/* Show Escalation Options if Status is Escalate */}
      {status === "Escalate" && (
        <div>
          <div className="mb-4">
            <label className="block font-semibold">Escalate To</label>
            <select
              className="border p-2 w-full"
              value={escalateTo}
              onChange={(e) => setEscalateTo(e.target.value)}
            >
              <option value="">Select Escalation</option>
              {escalateOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Staff Name */}
          <div className="mb-4">
            <label className="block font-semibold">Staff Name</label>
            <input
              type="text"
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
              className="border p-2 w-full"
              placeholder="Enter Staff Name"
            />
          </div>

          {/* Comment */}
          <div className="mb-4">
            <label className="block font-semibold">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border p-2 w-full"
              rows="3"
              placeholder="Enter comment here"
            ></textarea>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button className="bg-orange-500 text-white font-bold p-3 w-full">Submit</button>
    </div>
  );
};

export default ManageInteraction;
