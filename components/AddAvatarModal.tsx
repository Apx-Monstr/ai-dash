"use client"
import React, { useState } from 'react';

interface AvatarForm {
    name: string;
    imageUrl: string;
}

const AddAvatarModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<AvatarForm>({ name: '', imageUrl: '' });

    const toggleModal = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setFormData({ name: '', imageUrl: '' });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Avatar Data:', formData);
        toggleModal();
    };

    return (
        <div className="p-4">
            <div className="mb-4 fixed right-16 bottom-4">
                <button
                    onClick={toggleModal}
                    className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition"
                >
                   + Add New Avatar
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 sm:mx-0">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Add Avatar</h2>
                            <button
                                onClick={toggleModal}
                                className="text-gray-500 hover:text-gray-700 text-xl"
                            >
                                ×
                            </button>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Enter the details below to create a new avatar for your AI Avatar Manager.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="imageUrl"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleInputChange}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter image URL"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddAvatarModal;