'use client';

interface GetDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetDemoModal({ isOpen, onClose }: GetDemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800">Get a Demo</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800">
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-2"
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
            Request Demo
          </button>
        </form>
      </div>
    </div>
  );
}
