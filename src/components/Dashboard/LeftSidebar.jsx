import { FiHome, FiUsers } from "react-icons/fi";
import { LuFileStack } from "react-icons/lu";
import { FaSchool, FaBook, FaGlobe } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

import NavItem from "./NavItem";
import ToggleClose from "./ToggleClose";
import TitleSection from "./TitleSection";

const LeftSidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className={`sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-slate-100 p-2`}
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />
      <ToggleClose open={open} setOpen={setOpen} />
      <div className="space-y-1">
        <NavItem
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
          to="/dashboard"
        />
        <NavItem
          Icon={FaGlobe}
          title="Countries"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
          to="/dashboard/countries"
        />
        <NavItem
          Icon={FaSchool}
          title="Universities"
          selected={selected}
          setSelected={setSelected}
          open={open}
          to="/dashboard/universities"
        />
        <NavItem
          Icon={FaBook}
          title="Courses"
          selected={selected}
          setSelected={setSelected}
          open={open}
          to="/dashboard/courses"
        />
        <NavItem
          Icon={FiUsers}
          title="Users"
          selected={selected}
          setSelected={setSelected}
          open={open}
          to="/dashboard/users"
        />
        <NavItem
          Icon={LuFileStack}
          title="Applications"
          selected={selected}
          setSelected={setSelected}
          open={open}
          to="/dashboard/applications"
        />
      </div>
    </motion.nav>
  );
};

export default LeftSidebar;
