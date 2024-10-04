import { motion } from "framer-motion";
import logo from "../../assets/icons/applyhere.png";

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <figure>
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </figure>
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-md font-semibold">ApplyHere</span>
              <span className="block text-xs text-slate-500">
                Admin Dashboard
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
