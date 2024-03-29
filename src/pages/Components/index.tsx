import Container from "@/components/commonStyles/Container/Container";
import { useState } from "react";
import { CommonStyles } from "@/components/commonStyles";
import Form from "./Children/Form";
import { Box } from "@mui/material";
import { TabsComponent } from "@/interfaces/enum";
import Common from "./Children/Common";
import Table from "./Children/Table";
import PaginationDemo from "./Children/Pagination";

const Components = () => {
  const [activeTab, setActiveTab] = useState<TabsComponent>(TabsComponent.form);

  const renderActiveTab = () => {
    const tabs = { form: <Form />, common: <Common />, table: <Table />, pagination: <PaginationDemo /> };
    return tabs[activeTab];
  };
  return (
    <Container>
      <CommonStyles.CommonTabs listTabs={tabsComponent} value={activeTab} onChangeTab={(e, value) => setActiveTab(value)} />
      <Box sx={{ marginTop: "32px" }}>{renderActiveTab()}</Box>
    </Container>
  );
};

export default Components;

const tabsComponent = [
  { label: "Form", value: "form" },
  { label: "Common", value: "common" },
  { label: "Table", value: "table" },
  { label: "Pagination", value: "pagination" },
];
