"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import defaultUserImg from "../assets/profile.jpg"; // Default user image
import { Link } from "react-router-dom"; // React Router for client-side navigation

const Sb = () => {
  const { user } = useContext(AuthContext);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo
        href="/"
        img={user?.photoURL || defaultUserImg}
        imgAlt="User profile"
        className="w-16 h-16"
      >
        <p>{user?.displayName || "User"}</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiOutlineCloudUpload}>
            <Link to="/admin/dashboard/upload" className="w-full block">
              Upload Book
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>
            <Link to="/admin/dashboard/manage" className="w-full block">
              Manage Books
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiUser}>
            <Link to="#" className="w-full block">
              Users
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiShoppingBag}>
            <Link to="#" className="w-full block">
              Products
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmLeft}>
            <Link to="/logout" className="w-full block">
              Log Out
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>
            <Link to="#" className="w-full block">
              Upgrade to Pro
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>
            <Link to="#" className="w-full block">
              Documentation
            </Link>
          </Sidebar.Item>
          <Sidebar.Item icon={BiBuoy}>
            <Link to="#" className="w-full block">
              Help
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Sb;
