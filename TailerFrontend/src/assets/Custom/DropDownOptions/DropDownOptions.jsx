import { Dropdown, Menu } from "antd";
import React from "react";
import { FaClipboardList, FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const DropDownOptions = (props) => {
  let { row, heading, CallBack } = props;

  let Options = props.menuItems || heading.options || [];

  const getMenu = (row) => (
    <Menu className="ClearDropDownSpan">
      {Options.map((option, index) => (
        <Menu.Item
          key={index}
          onClick={() => CallBack(option.action, row, option.action)}
          style={option.style || {}}
          icon={option.icon || ""}
        >
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={getMenu(row)} trigger={["click"]}>
        <FaGear />
      </Dropdown>
    </div>
  );
};

export default DropDownOptions;
