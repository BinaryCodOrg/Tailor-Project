import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import LineChart from "../LineChart/LineChart";
import PieChart from "../LineChart/PieChart";
import DynamicTable from "../../assets/Custom/DynamicTable";
import DynamicList from "../../assets/Custom/DynamicList";
import { FaClipboardCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Widget from "../../assets/Custom/Widget";

import today from "../../assets/Images/Widget/date-today-svgrepo-com.svg";
import Progress from "../../assets/Images/Widget/dataflow-03-svgrepo-com.svg";
import pending from "../../assets/Images/Widget/shifts-pending-svgrepo-com.svg";
import Delivered from "../../assets/Images/Widget/clipboard-check-svgrepo-com.svg";

import DynamicAntTable from "../../assets/Custom/DynamicAntTable";
import {
  DeleteAxios,
  GetAxios,
  openNotification,
  PatchAxios,
  PostAxios,
} from "../../assets/Api/Api";
import { useRecoilState, useRecoilValue } from "recoil";
import { AllData, defaultUrl, Orders, WebContent } from "../../Store/Atom";
import InnerModal from "../../assets/Custom/InnerModal";
import DeliveryDetail from "../DeliveryDetail/DeliveryDetail";
import CButton from "../../assets/Custom/CButton";
import { useNavigate } from "react-router-dom";
import { FiInfo } from "react-icons/fi";
import { Tooltip } from "antd";
import ChartJSComponent from "../../assets/Custom/ChartJSComponent/ChartJSComponent";
import CInput from "../../assets/Custom/CInput";
import { Form, Formik } from "formik";

const DashBoard = () => {
  let [flagState, setFlagState] = useState(false);
  let [modalObject, setModalObject] = useState({});

  let DefaultUrl = useRecoilValue(defaultUrl);
  let [allData, setAllData] = useRecoilState(AllData);
  let [orders, setOrders] = useRecoilState(Orders);
  let webContent = useRecoilValue(WebContent);

  let Nav = useNavigate();

  useEffect(() => {
    // Create a new async function called fetchData
    const fetchData = async () => {
      try {
        // Make a fetch request to the API
        const response = await GetAxios("/order/getAll");

        setAllData(response);
        setOrders(response);
        setFilteredOrders(response.filter((order) => {
          const returnDate = new Date(order.returnDate); // Convert to Date object if it's a string
          const timeDifference = returnDate - currentDate; // Difference in milliseconds
          const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
      
          // Check if returnDate is within 5 days from today
          return daysDifference >= 0 && daysDifference <= 5;
        }))
        // Log the data to the console
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    // Call fetchData
    fetchData();
  }, []);

  let [option, setOption] = useState("Poultry Farm");

  let [widgets, setWidgets] = useState([
    {
      Name: "Todays Order",
      value: 1,
      symbol: "#",
      symbolLocation: "prefix",
      icon: today,
      version: 2,
      extra: "themeGreen",
    },
    {
      Name: "Orders In Progress",
      value: 11000,
      symbol: "Rs",
      symbolLocation: "prefix",
      icon: Progress,
      version: 2,
      extra: "themeOrange",
    },
    {
      Name: "Orders in Pending",
      value: 10,
      symbol: "#",
      symbolLocation: "prefix",
      icon: pending,
      version: 2,
      extra: "DefaultTheme",
    },
    {
      Name: "Orders Delivered",
      value: 23,
      symbol: "#",
      symbolLocation: "prefix",
      icon: Delivered,
      version: 2,
      extra: "DefaultTheme",
    },
  ]);

  let headings = [
    { label: webContent?.DashBoard?.table?.No || "", attribute: "index" },
    {
      label: webContent?.DashBoard?.table?.ReceivedDate || "",
      attribute: "receivedDate",
    },
    { label: webContent?.DashBoard?.table?.Name || "", attribute: "name" },
    {
      label: webContent?.DashBoard?.table?.PhoneNumber || "",
      attribute: "phoneNumber",
    },
    {
      label: webContent?.DashBoard?.table?.ReturnDate || "",
      attribute: "returnDate",
    },
    {
      label: webContent?.DashBoard?.table?.Status || "",
      attribute: "status",
      styleSet: { display: "flex", justifyContnet: "center" },
    },

    {
      label: webContent?.DashBoard?.table?.Operations || "",
      attribute: "Operations",
      options: [
        {
          action: "edit",
          label: "Edit",
          icon: <FaEdit />,
        },
        {
          action: "update",
          label: "Update",
          icon: <FaClipboardCheck />,
        },
      ],
    },
  ];

  let NewAppointmentHandling = (Heading, row, action) => {
    // console.log(headings, row, action);

    switch (action) {
      case "Edit":
      case "edit":
        console.log("Edit");
        Nav(`/NewOrder?Order=${row._id}`);
        break;
      case "MarkDone":
      case "markDone":
        completeOrder(row, Heading, "Completed");
        console.log("MarkDone");
        break;
      case "Cancel":
      case "cancel":
        console.log("Cancel");
        if (row.status === "Completed") {
          openNotification(
            "error",
            "topRight",
            "Error",
            "Order is already completed, cannot be cancelled."
          );
          return;
        }
        completeOrder(row, Heading, "Cancelled");
        break;
      case "Delete":
      case "delete":
        console.log("Delete");
        deleteOrder(row, Heading);
        break;
      default:
        console.log("kuch Nahi chala");
    }
  };
  async function completeOrder(row, Heading, status) {
    try {
      let updateData = JSON.parse(JSON.stringify(row));
      updateData.status = status;
      // console.log(JSON.stringify(updateData.status));
      const response = await PatchAxios(`/order/update`, updateData);
      // console.log(response);

      setOrders((prev) =>
        prev.map((order) => (order._id === updateData._id ? response : order))
      );
      // Show notification
      openNotification(
        "success",
        "topRight",
        "Order Complete",
        "" + updateData.name + "'s order is completed"
      );
    } catch (error) {
      console.error("Error deleting order:", error);
      openNotification(
        "error",
        "topRight",
        "Error",
        "An error occurred while deleting the order"
      );
    }
  }

  async function deleteOrder(row, Heading) {
    try {
      const response = await DeleteAxios(`/order/delete/${row._id}`);
      // console.log(response);

      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== row._id)
      );
      // Show notification
      openNotification(
        "success",
        "topRight",
        "Order Deleted",
        response.message
      );
    } catch (error) {
      console.error("Error deleting order:", error);
      openNotification(
        "error",
        "topRight",
        "Error",
        "An error occurred while deleting the order"
      );
    }
  }

  let TodaysAppointmentHandling = (Heading, row, action) => {};

  const menuItems = [
    {
      action: "edit",
      label: "Edit",
      icon: <FaEdit />,
      onClick: (heading, row) => CallBack(heading, row, "Edit"),
    },
    {
      action: "markDone",
      label: "Mark Done",
      icon: <IoIosCheckmarkCircle />,
      onClick: (heading, row) => CallBack(heading, row, "MarkDone"),
    },
    {
      action: "cancel",
      label: "Cancel",
      icon: <MdCancel />,
      onClick: (heading, row) => CallBack(heading, row, "Cancel"),
    },
    {
      action: "delete",
      label: "Delete",
      icon: <FaTrashAlt />,
      onClick: (heading, row) => CallBack(heading, row, "Delete"),
    },
  ];

  let CallBack = (elem) => {
    // alert(elem)
    setOption(elem);

    let Obj = {
      name: "",
      deliveryBoy: "",
      qty: 0,
      rate: 0,
      dueAmt: 0,
      db: 0,
      cash: 0,
      ac: 0,
      prevBal: 0,
      netBal: 0,
      remarks: "",
      payment_status: "Pending",
      delivery_status: "Pending",
    };

    switch (elem) {
      case "Cash Sale":
        //Function to store Data for Walk-In-Customer

        //In Alert PopUp ask rate from User
        let rate = prompt("Please enter the rate for Cash Sale:");
        Obj.rate = rate ? parseFloat(rate) : Obj.rate;

        Obj.name = "Walk-IN-Customer";
        Obj.payment_status = "paid";
        Obj.delivery_status = "delivered";

        CashSalePost(Obj);

        break;
      case "Delivery":
        Obj.rate = 80;
        // Function to Open Delivery Details Module
        setModalObject({
          title: "Delivery Detail",
          key: "DeliveryDetail",
          data: Obj,
        });
        setFlagState(true);

        break;
      case "IKRAM":
        // Function to store 1 Bottle of IKRAM
        break;

      case "ISLAM":
        // Function to store 1 Bottle of ISLAM
        break;

      default:
        console.log("kuch Nahi chala");
        break;
    }
  };

  let CashSalePost = async (Obj) => {
    let Res = await PostAxios("/Daily_Sale/Add", Obj);
    if (Res) {
      console.log("kuchToHuwa");
    }
  };

  const componentMapping = {
    "Delivery Detail": <DeliveryDetail />,
  };

  const ModalContent = (obj) => {
    return componentMapping[obj.title] || null;
  };

  // Assuming orders is an array of objects and returnDate is a Date object or a valid date string
  const currentDate = new Date();

  const [filteredOrders, setFilteredOrders] = useState();

  const chartData = {
    labels: [
      "2022-01-01",
      "2022-01-02",
      "2022-01-03",
      "2022-01-04",
      "2022-01-05",
      "2022-01-06",
      "2022-01-07",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [10, 41, 35, 51, 49, 62, 69],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4, // Smooth curve
      },
      {
        label: "Expenses",
        data: [23, 12, 54, 61, 32, 56, 81],
        fill: true,
        backgroundColor: "rgba(255, 161, 99, 0.2)",
        borderColor: "rgb(253, 159, 37)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips unless hovered
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis
      },
      y: {
        display: false, // Hide Y-axis
      },
    },
  };

  return (
    <div className="container-fluid p-0">
      <InnerModal
        flagState={flagState}
        setFlagState={setFlagState}
        modalObject={modalObject}
      >
        {ModalContent(modalObject)}
      </InnerModal>

      <Row className="align-items-stretch mb-3">
        <div className="col-md-12">
          <Widget allWidget={widgets} setOption={CallBack} />
        </div>
      </Row>

      <Row className="align-items-stretch">
        <div className="col-md-8">
          <Card className={"shadow p-3"} style={{ maxHeight: "80vh" }}>
            <div className="row">
              <div className="col-md-10">
                <h4 className="Head1 mb-4">
                  {webContent?.DashBoard?.sections?.allOrdersChart || ""}
                </h4>
              </div>
            </div>
            <ChartJSComponent data={chartData} options={chartOptions} />
          </Card>
        </div>

        <div className="col-md-4">
          <Card className={"shadow p-3"} style={{ height: "100%" }}>
            <h4 className="Head1 mb-4">
              {webContent?.DashBoard?.sections?.UpcomingReturns || ""}
              <Tooltip title="This is a list of those orders you need to clear first since there return date is near">
                <FiInfo
                  size={18}
                  style={{ margin: "0px 0px 0px 10px", cursor: "pointer" }}
                />
              </Tooltip>
            </h4>
            <div className="table-responsive">
              <DynamicList
                skipUpTill={4}
                CallBack={TodaysAppointmentHandling}
                headings={headings}
                data={filteredOrders}
                listConcatenationArray={["name"]}
              />
            </div>
          </Card>
        </div>

        <div className="col-md-12 mt-3">
          <Card
            className={"shadow p-3"}
            style={{ maxHeight: "80vh", overflow: "auto" }}
          >
            <div className="row justify-content-between align-items-center">
              <div className="col-md-2 mt-2">
                <h4 className="Head1 m-0">
                  {webContent?.DashBoard?.sections?.allOrders || ""}
                </h4>
              </div>

              <div className="col-md-3">
                <Formik
                  initialValues={{
                    search: "",
                  }}
                  // validationSchema={validationSchema}
                  onSubmit={() => {}}
                  enableReinitialize
                >
                  {({ values, handleChange, setFieldValue, handleBlur }) => {
                    return (
                      <Form>
                        <CInput
                          type="text"
                          placeholder="Search Order by Name/Phone "
                          name="search"
                          style={{
                            width: "100%",
                            height: "40px",
                          }}
                          onChangeCallback={(values, setFieldValue, e) => {
                            console.log(e.value);
                            const value = e.value.toLowerCase();

                            setOrders(
                              allData.filter((order) => {
                                const name = order.name?.toLowerCase() || "";
                                const phone =
                                  order.phoneNumber?.toLowerCase() || "";

                                return (
                                  name.includes(value) || phone.includes(value)
                                );
                              })
                            );
                          }}
                        />
                      </Form>
                    );
                  }}
                </Formik>
              </div>

              <div className="col-md-2">
                <CButton
                  styles={{ width: "100%" }}
                  callBackFunction={() => Nav("/NewOrder")}
                  text="New Order"
                  type="primary"
                />
              </div>
            </div>

            <div className="row justify-content-center mb-3"></div>

            <DynamicTable
              CallBack={NewAppointmentHandling}
              menuItems={menuItems}
              headings={headings}
              data={orders}
            />
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default DashBoard;
