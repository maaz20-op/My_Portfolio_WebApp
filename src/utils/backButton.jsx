import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 mb-6 lg:mb-12 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-2xl shadow-md transition-all duration-300 active:scale-95"
    >
      <ArrowLeft className="w-5 h-5" />
      Back
    </button>
  );
}
