import React from "react";
import { Table } from "react-bootstrap";
import DropDownOptions from "./DropDownOptions/DropDownOptions";
import { formatDate } from "../Api/Api";
import { Tag } from "antd";

const DynamicTable = ({ headings, data, CallBack, menuItems }) => {
  return (
    <div className="table-container border-0 ">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className="overflow-box">
                {heading.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                {headings.map((heading, hIndex) => {
                  if (heading.attribute === "index") {
                    return (
                      <td
                        key={hIndex}
                        className={"fw-bold" + (heading.extraClasses || "")}
                        style={heading.styleSet ? heading.styleSet : {}}
                      >
                        {index + 1}
                      </td>
                    );
                  }
                  if (heading.attribute === "StaticString") {
                    return (
                      <td
                        key={hIndex}
                        className={"fw-bold" + (heading.extraClasses || "")}
                        style={heading.styleSet ? heading.styleSet : {}}
                      >
                        {heading.Text}
                      </td>
                    );
                  }
                  if (heading.attribute === "status") {
                    return (
                      <td
                        key={hIndex}
                        className={"fw-bold" + (heading.extraClasses || "")}
                        // style={heading.styleSet ? heading.styleSet : {}}
                        style={{
                          ...heading.styleSet,
                          textTransform: "capitalize",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Tag
                          color={
                            item[heading.attribute] === "Completed"
                              ? "green"
                              : item[heading.attribute] === "Pending"
                              ? "orange"
                              : item[heading.attribute] === "Cancelled"
                              ? "red"
                              : item[heading.attribute] === "In Progress"
                              ? "purple"
                              : "blue"
                          }
                          style={{
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            padding: "0.2rem 0.5rem",
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          {item[heading.attribute]}
                        </Tag>
                      </td>
                    );
                  }
                  if (
                    heading.attribute === "Operations" ||
                    heading.attribute === "operations"
                  ) {
                    return (
                      <td
                        key={hIndex}
                        className={heading.extraClasses || ""}
                        style={heading.styleSet ? heading.styleSet : {}}
                      >
                        <DropDownOptions
                          menuItems={menuItems}
                          CallBack={CallBack}
                          heading={heading}
                          row={item}
                        />
                      </td>
                    );
                  } else if (
                    heading.attribute === "receivedDate" ||
                    heading.attribute === "returnDate" ||
                    heading.attribute === "Data" ||
                    heading.attribute === "data"
                  ) {
                    return (
                      <td
                        key={hIndex}
                        className={heading.extraClasses || ""}
                        style={heading.styleSet ? heading.styleSet : {}}
                      >
                        {formatDate(item[heading.attribute], "yyyy-MM-dd")}
                      </td>
                    );
                  }
                  {
                    return (
                      <td
                        key={hIndex}
                        className={heading.extraClasses || ""}
                        style={heading.styleSet ? heading.styleSet : {}}
                      >
                        {" "}
                        {item[heading.attribute] instanceof Date
                          ? formatDate(item[heading.attribute], "yyyy-MM-dd")
                          : item[heading.attribute]}
                      </td>
                    );
                  }
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headings.length} className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DynamicTable;
