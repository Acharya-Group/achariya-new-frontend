'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from '@/componets/admin/AdminLayout';
import { FaEdit, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import useStationery, { Stationery } from '@/hooks/stationeryRate';

const StationeryPage: React.FC = () => {
  const { allStationery, createStationery, updateStationery, deleteStationery } = useStationery();
  const [form, setForm] = useState({
    _id: '',
    name: '',
    rateOnLessQuantity: '',
    quantityThreshold: '',
    rateOnGreaterQuantity: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () =>
    setForm({ _id: '', name: '', rateOnLessQuantity: '', quantityThreshold: '', rateOnGreaterQuantity: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemData = {
      name: form.name,
      rateOnLessQuantity: Number(form.rateOnLessQuantity),
      quantityThreshold: Number(form.quantityThreshold),
      rateOnGreaterQuantity: Number(form.rateOnGreaterQuantity),
    };

    if (isEditing) {
      if (!form._id) return toast.error('Invalid ID for update');
      updateStationery.mutate(
        { _id: form._id, ...itemData },
        {
          onSuccess: () => {
            toast.success('Item updated successfully!');
            setIsEditing(false);
            resetForm();
          },
          onError: () => toast.error('Failed to update item'),
        }
      );
    } else {
      createStationery.mutate(itemData, {
        onSuccess: () => {
          toast.success('Item added successfully!');
          resetForm();
        },
        onError: () => toast.error('Failed to add item'),
      });
    }
  };

  const handleEdit = (item: Stationery) => {
    setForm({
      _id: item._id,
      name: item.name,
      rateOnLessQuantity: item.rateOnLessQuantity.toString(),
      quantityThreshold: item.quantityThreshold.toString(),
      rateOnGreaterQuantity: item.rateOnGreaterQuantity.toString(),
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteStationery.mutate(id, {
        onSuccess: () => toast.success('Item deleted successfully!'),
        onError: () => toast.error('Failed to delete item'),
      });
      if (isEditing && form._id === id) {
        resetForm();
        setIsEditing(false);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Stationery Item' : 'Add Stationery Item'}</h1>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
            required
          />
          <input
            type="number"
            name="rateOnLessQuantity"
            placeholder="Rate on less quantity"
            value={form.rateOnLessQuantity}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
            required
          />
          <input
            type="number"
            name="quantityThreshold"
            placeholder="Quantity Threshold"
            value={form.quantityThreshold}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
            required
          />
          <input
            type="number"
            name="rateOnGreaterQuantity"
            placeholder="Rate on greater quantity"
            value={form.rateOnGreaterQuantity}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a0706]"
            required
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-4 bg-[#7a0706] text-white py-2 rounded-lg hover:bg-[#5a0505] transition"
          >
            {isEditing ? 'Update Item' : 'Add Item'}
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full divide-y divide-gray-200">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sr No.</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Rate (Less Qty)</th>
                <th className="px-4 py-2 text-left">Quantity Threshold</th>
                <th className="px-4 py-2 text-left">Rate (Greater Qty)</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allStationery.data?.map((item, idx) => (
                <tr key={item._id}>
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.rateOnLessQuantity}</td>
                  <td className="px-4 py-2">{item.quantityThreshold}</td>
                  <td className="px-4 py-2">{item.rateOnGreaterQuantity}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default StationeryPage;
