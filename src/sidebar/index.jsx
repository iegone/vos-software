import { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "./menuItems.json";
import { FaOilWell } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import {
  FaTachometerAlt,
  FaDatabase,
  FaFile,
  FaCogs,
  FaChevronDown,
  FaChevronUp,
  FaUpload,
  FaEdit,
} from "react-icons/fa";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState([]); // مصفوفة لفتح/إغلاق القوائم

  const handleToggle = (menuTitle) => {
    if (openMenus.includes(menuTitle)) {
      setOpenMenus(openMenus.filter((title) => title !== menuTitle));
    } else {
      setOpenMenus([...openMenus, menuTitle]);
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "dashboard":
        return <FaTachometerAlt />;
      case "database":
        return <FaDatabase />;
      case "OilWell":
        return <FaOilWell />;
      case "file":
        return <FaFile />;
      case "settings":
        return <FaCogs />;
      case "upload":
        return <FaUpload />;
      case "Add":
        return <IoIosAddCircle />;
      case "edit":
        return <FaEdit />;
      default:
        return null;
    }
  };

  // دالة استدعاء ذاتي لعرض الـsubmenu داخل submenu بطريقة ديناميكية
  const renderSubMenu = (submenu, level = 1) => {
    return (
      <div>
        {submenu.map((subItem, subIndex) => (
          <div key={subIndex}>
            <div
              onClick={() => handleToggle(subItem.title)}
              className="cursor-pointer ml-4 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between"
              style={{ paddingLeft: `${level * 16}px` }} // تعديل المسافة هنا
            >
              <Link to={subItem.path} className="flex w-full items-center">
                {renderIcon(subItem.icon)}
                <span className="ml-2">{subItem.title}</span>
              </Link>
              {subItem.submenu?.length > 0 && (
                openMenus.includes(subItem.title) ? <FaChevronUp /> : <FaChevronDown />
              )}
            </div>
            {/* عرض القوائم الفرعية بشكل متداخل */}
            {openMenus.includes(subItem.title) && subItem.submenu?.length > 0 && (
              renderSubMenu(subItem.submenu, level + 1)
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-screen bg-background-secondary w-64 space-y-6 py-7 px-2">
      <div className="text-2xl font-bold text-center">VOS Software</div>
      <nav>
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleToggle(item.title)}
              className="cursor-pointer py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between"
            >
              <Link to={item.path} className="flex w-full items-center">
                {renderIcon(item.icon)}
                <span className="ml-2">{item.title}</span>
              </Link>
              {item.submenu?.length > 0 && (
                openMenus.includes(item.title) ? <FaChevronUp /> : <FaChevronDown />
              )}
            </div>
            {/* عرض القوائم الفرعية إذا كانت القائمة مفتوحة */}
            {openMenus.includes(item.title) && item.submenu?.length > 0 && (
              renderSubMenu(item.submenu)
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
