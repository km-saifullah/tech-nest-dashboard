import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import SideLink from "../../components/SideLink";

const Sidebar = () => {
  return (
    <main className="h-[100vh] w-[250px] p-5">
      <section className="">
        <section className="py-6 space-y-6">
          <Link to="/">
            <h2 className="text-primary text-3xl font-bold font-inter">
              TechNest
            </h2>
          </Link>
          <p className="text-base text-text font-inter font-normal">
            Admin Panel
          </p>
        </section>
        <SideLink icon={IoIosHome} path="/" title="Home" />
        <SideLink icon={FaUsers} path="/users" title="Users" />
        <SideLink
          icon={GiPerspectiveDiceSixFacesRandom}
          path="/product-variations"
          title="Variation"
        />
        <SideLink icon={TbCategory2} path="/categories" title="Category" />
        <SideLink
          icon={MdOutlineCategory}
          path="/sub-category"
          title="Sub Category"
        />
        <SideLink icon={CiShop} path="/products" title="Products" />
        <SideLink
          icon={MdOutlineInventory2}
          path="/inventories"
          title="Inventory"
        />
        <SideLink icon={FaCartPlus} path="carts" title="Cart" />
        <SideLink icon={IoSettingsSharp} path="settings" title="Settings" />
      </section>
    </main>
  );
};

export default Sidebar;
