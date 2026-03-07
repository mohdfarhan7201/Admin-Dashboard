import { Link, useLocation } from "react-router-dom";
import {
  Home,
  UserPlus,
  Grid3X3,
  GraduationCap,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  MessageSquare,
  Users,
} from "lucide-react";
import logo from "../assets/logo.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext"; // ✅ Import ThemeContext

const navigationItems = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: Home },
  { id: "add-manager", label: "Add Manager", path: "/add-manager", icon: UserPlus },
  { id: "manage-classes", label: "Class Analytics", path: "/manage-classes", icon: Grid3X3 },
  { id: "instructor", label: "Instructor", path: "/instructor", icon: GraduationCap },
  { id: "report", label: "Report", path: "/report", icon: FileText },
  { id: "payment", label: "Payment", path: "/payment", icon: CreditCard },

  {
    id: "feedback",
    label: "Feedback",
    icon: MessageSquare,
    children: [
      { id: "employee-feedback", label: "Employee Feedback", path: "/feedback/employee", icon: Users },
      { id: "customer-feedback", label: "Customer Feedback", path: "/feedback/customer", icon: Users },
      { id: "payment-feedback", label: "Payment Feedback", path: "/feedback/payment", icon: Users },
    ],
  },

  { id: "Permisions", label: "Roll & Permissions", path: "/roll-permission", icon: Settings },
  { id: "setting", label: "Settings", path: "/setting", icon: Settings },
  { id: "logout", label: "Logout", path: "/logout", icon: LogOut },
];

function Sidebar({ className = "" }) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const { darkMode } = useContext(ThemeContext); // ✅ Use theme

  const getActiveIndex = () => {
    const activeItem = navigationItems.findIndex((item) => {
      if (item.children) {
        return item.children.some((child) =>
          location.pathname.startsWith(child.path)
        );
      }
      if (item.path === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(item.path);
    });
    return activeItem === -1 ? 0 : activeItem;
  };

  const activeIndex = getActiveIndex();

  const hideIndicator =
    openDropdown === "feedback" &&
    !navigationItems
      .find((i) => i.id === "feedback")
      .children.some((child) => location.pathname.startsWith(child.path));

  const handleParentClick = (item) => {
    if (item.children) {
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <div
      className={`w-64 fixed top-0 left-0 h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#262B40] text-white" : "bg-gradient-to-b from-teal-50 to-teal-100 text-black"
      } ${className}`}
    >
      {/* Logo */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <span className="text-lg font-medium tracking-wide">
            AATMAYANTRA
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative px-2">
        {!hideIndicator && (
          <div
            className="absolute -right-1 w-60 h-13 shadow transition-colors   "
            style={{
              top: `${activeIndex * 52 + 4}px`,
              borderTopLeftRadius: "28px",
              borderBottomLeftRadius: "28px",
              background: darkMode ? "#191F36" : "white",
            }}
          >
            <div
              className="absolute -top-7 right-0 w-7 h-7 shadow transition-colors   "
              style={{
                background: "transparent",
                borderBottomRightRadius: "28px",
                boxShadow: darkMode ? "0 14px 0 0 #191F36" : "0 14px 0 0 white",
              }}
            ></div>
            <div
              className="absolute -bottom-7 right-0 w-7 h-7 shadow transition-colors   "
              style={{
                background: "transparent",
                borderTopRightRadius: "28px",
                boxShadow: darkMode ? "0 -14px 0 0 #191F36" : "0 -14px 0 0 white",
              }}
            ></div>
          </div>
        )}

        <ul className="ml-5">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.children
              ? item.children.some((child) => location.pathname.startsWith(child.path))
              : item.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

            return (
              <li key={item.id}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleParentClick(item)}
                      className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-200 relative z-10 ${
                        isActive
                          ? darkMode ? "text-blue-500 font-bold" : "text-black font-bold"
                          : darkMode ? "text-gray-300 font-medium hover:text-white" : "text-black font-medium hover:text-teal-800"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive
                            ? darkMode ? "text-blue-500" : "text-teal-600"
                            : darkMode ? "text-gray-300" : "text-teal-500"
                        }`}
                      />
                      <span
                        className={`text-lg ${
                          isActive
                            ? darkMode
                              ? "border-b-2 border-blue-500 pb-1"
                              : "border-b-2 border-teal-600 pb-1"
                            : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>

                    {openDropdown === item.id && (
                      <ul className="ml-10 mt-1 mb-2 border-l-2 pl-3" style={{ borderColor: darkMode ? "#374151" : "#a5f3fc" }}>
                        {item.children.map((child) => {
                          const ChildIcon = child.icon;
                          const childActive = location.pathname.startsWith(child.path);
                          return (
                            <li key={child.id}>
                              <Link
                                to={child.path}
                                onClick={() => setOpenDropdown(null)}
                                className={`flex items-center gap-2 px-2 py-2 text-sm transition ${
                                  childActive
                                    ? darkMode ? "text-white font-semibold" : "text-teal-700 font-semibold"
                                    : darkMode ? "text-gray-300 hover:text-white" : "text-black hover:text-teal-700"
                                }`}
                              >
                                <ChildIcon className="w-4 h-4" />
                                <span
                                  className={`${
                                    childActive
                                      ? darkMode
                                        ? "border-b-2 border-white pb-0.5"
                                        : "border-b-2 border-teal-600 pb-0.5"
                                      : ""
                                  }`}
                                >
                                  {child.label}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => handleParentClick(item)}
                    className={`flex items-center gap-2 px-4 py-3 transition-all duration-200 relative z-10 ${
                      isActive
                        ? darkMode ? "text-blue-500 font-bold" : "text-black font-bold"
                        : darkMode ? "text-gray-300 font-medium hover:text-white" : "text-black font-medium hover:text-teal-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive
                          ? darkMode ? "text-blue-500" : "text-teal-600"
                          : darkMode ? "text-gray-300" : "text-teal-500"
                      }`}
                    />
                    <span
                      className={`text-lg ${
                        isActive
                          ? darkMode
                            ? "border-b-3 border-blue-500 pb-1"
                            : "border-b-3 border-teal-600 pb-1"
                          : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
