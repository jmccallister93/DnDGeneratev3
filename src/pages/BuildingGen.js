import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { e } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";

const BuildingGen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isRoomActive, setIsRoomActive] = useState(false);

  const [buildingName, setBuildingName] = useState("");
  const [buildingNames, setBuildingNames] = useState("");
  const [buildingNameOptions, setBuildingNameOptions] = useState("");

  const [buildingCategory, setBuildingCategory] = useState("");
  const [buildingCategorys, setBuildingCategorys] = useState("");
  const [buildingCategoryOptions, setBuildingCategoryOptions] = useState("");

  const [buildingType, setBuildingType] = useState("");
  const [buildingTypes, setBuildingTypes] = useState("");
  const [buildingTypeOptions, setBuildingTypeOptions] = useState("");
  const [buildingTypeCategory, setBuildingTypeCategory] = useState();
  const [buildingList, setBuildingList] = useState("");
  const [selectedBuildingType, setSelectedBuildingType] = useState(null);
  const [dialogVisibleBuildingType, setDialogVisibleBuildingType] =
    useState(false);

  const [buildingRoom, setBuildingRoom] = useState("");
  const [buildingRooms, setBuildingRooms] = useState("");
  const [buildingRoomOptions, setBuildingRoomOptions] = useState("");
  const [selectedBuildingRoom, setSelectedBuildingRoom] = useState(null);
  const [dialogVisibleBuildingRoom, setDialogVisibleBuildingRoom] =
    useState(false);

  const [buildingColor, setBuildingColor] = useState("");
  const [buildingColors, setBuildingColors] = useState("");
  const [buildingColorOptions, setBuildingColorOptions] = useState("");
  const [selectedBuildingColor, setSelectedBuildingColor] = useState(null);
  const [dialogVisibleBuildingColor, setDialogVisibleBuildingColor] =
    useState(false);

  const [buildingSound, setBuildingSound] = useState("");
  const [buildingSounds, setBuildingSounds] = useState("");
  const [buildingSoundOptions, setBuildingSoundOptions] = useState("");
  const [selectedBuildingSound, setSelectedBuildingSound] = useState(null);
  const [dialogVisibleBuildingSound, setDialogVisibleBuildingSound] =
    useState(false);

  const [buildingSmell, setBuildingSmell] = useState("");
  const [buildingSmells, setBuildingSmells] = useState("");
  const [buildingSmellOptions, setBuildingSmellOptions] = useState("");
  const [selectedBuildingSmell, setSelectedBuildingSmell] = useState(null);
  const [dialogVisibleBuildingSmell, setDialogVisibleBuildingSmell] =
    useState(false);

  const [buildingStyle, setBuildingStyle] = useState("");
  const [buildingStyles, setBuildingStyles] = useState("");
  const [buildingStyleOptions, setBuildingStyleOptions] = useState("");
  const [selectedBuildingStyle, setSelectedBuildingStyle] = useState(null);
  const [dialogVisibleBuildingStyle, setDialogVisibleBuildingStyle] =
    useState(false);

  const [buildingEnterance, setBuildingEnterance] = useState("");
  const [buildingEnterances, setBuildingEnterances] = useState("");
  const [buildingEnteranceOptions, setBuildingEnteranceOptions] = useState("");

  const [buildingRoomCount, setBuildingRoomCount] = useState("");
  const [buildingRoomCounts, setBuildingRoomCounts] = useState("");
  const [buildingRoomCountOptions, setBuildingCountOptions] = useState("");

  const [buildingWindow, setBuildingWindow] = useState("");
  const [buildingWindows, setBuildingWindows] = useState("");
  const [buildingWindowOptions, setBuildingWindowOptions] = useState("");

  //Get Data
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select()
        .order("id");

      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(
          dataName.map((r) => ({ name: r.name, value: r.value, type: r.type }))
        );
      }
    };
    fetchData();
  };

  useEffect(() => {
    getData(
      "buildingCategory",
      setBuildingCategory,
      setBuildingCategorys,
      setBuildingCategoryOptions
    );
    getData(
      "buildingAll",
      setBuildingType,
      setBuildingTypes,
      setBuildingTypeOptions
    );
    getData(
      "buildingColors",
      setBuildingColor,
      setBuildingColors,
      setBuildingColorOptions
    );
    getData(
      "buildingSmell",
      setBuildingSmell,
      setBuildingSmells,
      setBuildingSmellOptions
    );
    getData(
      "buildingSound",
      setBuildingSound,
      setBuildingSounds,
      setBuildingSoundOptions
    );
    getData(
      "buildingStyle",
      setBuildingStyle,
      setBuildingStyles,
      setBuildingStyleOptions
    );
  }, []);

  //Datatable
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search mr-2" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const header = (
    <div className="flex justify-content-between">{renderHeader()}</div>
  );

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showRooms = (e) => {
    setIsRoomActive((current) => !current);
  };
  //InputTexts
  const customInputText = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.titles}>{title}</h2>
      <InputText value={value} onChange={change} placeholder={placeholder} />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //InputNumber
  const customInputNumber = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.titles}>{title}</h2>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
      />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //DropDowns
  const customDrop = (title, value, options, change, placeholder, click) => (
    <div className={style.dropContainer}>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <Dropdown
        optionLabel="name"
        value={value}
        options={options}
        onChange={change}
        placeholder={placeholder}
      />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );

  //Building Name
  const onBuildingNameChange = (e) => {
    setBuildingName(e.target.value);
  };
  const onRandomBuildingName = (e) => {};

  const nameText = customInputText(
    "Building Name",
    buildingName,
    onBuildingNameChange,
    "Set Name",
    onRandomBuildingName
  );

  //BuildingCategory
  const onRandomBuildingCategory = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingCategory(buildingCategoryOptions[r].name);
  };
  const onBuildingCategoryChange = (e) => {
    setBuildingCategory(e.value);
  };
  const onRandomBuildingType = (e) => {
    const max = buildingList.length - 1;
    let r = Math.round(Math.random() * (max - 0));
    setBuildingType(buildingList[r].name);
  };
  const buildingCategoryDrop = customDrop(
    "Category",
    buildingCategory,
    buildingCategoryOptions,
    onBuildingCategoryChange,
    "Choose Category",
    onRandomBuildingCategory
  );
  //BuildingType
  const openDialogBuildingType = () => {
    setDialogVisibleBuildingType(true);
  };
  const closeDialogBuildingType = () => {
    setDialogVisibleBuildingType(false);
    setBuildingType(selectedBuildingType.name);
  };
  const dialogFooterBuildingType = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogBuildingType} />
    );
  };
  const randomBuildingTypeBtn = (
    <Button onClick={onRandomBuildingType} className={style.btnName}>
      Random
    </Button>
  );
  useEffect(() => {
    setBuildingType("");

    setBuildingList(buildingTypeOptions);
    for (let i = 0; buildingTypeOptions.length > i; i++) {
      if (buildingCategory === "Housing") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Housing")
        );
      } else if (buildingCategory === "Trade") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Trade")
        );
      } else if (buildingCategory === "Religious") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Religious")
        );
      } else if (buildingCategory === "Farm") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Farm")
        );
      } else if (buildingCategory === "Recreation") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Recreation")
        );
      } else if (buildingCategory === "Education") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Education")
        );
      } else if (buildingCategory === "Military") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Military")
        );
      } else if (buildingCategory === "Institutional") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Institutional")
        );
      } else if (buildingCategory === "Mine") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Mine")
        );
      } else if (buildingCategory === "Agriculture") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Agriculture")
        );
      } else if (buildingCategory === "Any") {
        return setBuildingList(buildingTypeOptions);
      } else {
        return setBuildingList(buildingTypeOptions);
      }
    }
  }, [buildingCategory]);

  const buildingTypeDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Building Type</h2>
      {buildingCategory === "" ? (
        "Set Category"
      ) : (
        <>
          <Button
            onClick={openDialogBuildingType}
            className={style.btnAddRemove}
          >
            Add / Remove
          </Button>
          {randomBuildingTypeBtn}
        </>
      )}

      <Dialog
        header="Building Type"
        visible={dialogVisibleBuildingType}
        maximizable
        modal
        onHide={closeDialogBuildingType}
        footer={dialogFooterBuildingType}
      >
        <DataTable
          value={buildingList}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={selectedBuildingType}
          onSelectionChange={(e) => {
            setSelectedBuildingType(e.value);
          }}
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="single"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
          <Column
            field="type"
            header="Type"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );

  //BuildingStyle
  const onRandomBuildingStyle = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingStyle(buildingStyleOptions[r].name);
  };
  const onBuildingStyleChange = (e) => {
    setBuildingStyle(e.value);
  };
  const buildingStyleDrop = customDrop(
    "Style",
    buildingStyle,
    buildingStyleOptions,
    onBuildingStyleChange,
    "Choose Style",
    onRandomBuildingStyle
  );
  //BuildingColor
  const onRandomBuildingColor = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingColor(buildingColorOptions[r].name);
  };
  const onBuildingColorChange = (e) => {
    setBuildingColor(e.value);
  };
  const buildingColorDrop = customDrop(
    "Color",
    buildingColor,
    buildingColorOptions,
    onBuildingColorChange,
    "Choose Color",
    onRandomBuildingColor
  );
  //BuildingSound
  const onRandomBuildingSound = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingSound(buildingSoundOptions[r].name);
  };
  const onBuildingSoundChange = (e) => {
    setBuildingSound(e.value);
  };
  const buildingSoundDrop = customDrop(
    "Sound",
    buildingSound,
    buildingSoundOptions,
    onBuildingSoundChange,
    "Choose Sound",
    onRandomBuildingSound
  );
  //Building Enterances
  const onBuildingEnteranceChange = (e) => {
    setBuildingEnterance(e.value);
  };
  const onRandomBuildingEnterance = (e) => {
    let r = Math.round(Math.random() * (10 - 1));
    setBuildingEnterance(r);
  };
  const enteranceNumber = customInputNumber(
    "Building Enterances",
    buildingEnterance,
    onBuildingEnteranceChange,
    "Set Enterances",
    onRandomBuildingEnterance
  );
  //Building Windows
  const onBuildingWindowChange = (e) => {
    setBuildingWindow(e.value);
  };
  const onRandomBuildingWindow = (e) => {
    let r = Math.round(Math.random() * (20 - 0));
    setBuildingWindow(r);
  };
  const windowNumber = customInputNumber(
    "Building Windows",
    buildingWindow,
    onBuildingWindowChange,
    "Set Windows",
    onRandomBuildingWindow
  );
  //BuildingRooms
  const openDialogBuildingRoom = () => {
    setDialogVisibleBuildingRoom(true);
  };
  const closeDialogBuildingRoom = () => {
    setDialogVisibleBuildingRoom(false);
    setBuildingRoom(selectedBuildingRoom.name);
  };
  const dialogFooterBuildingRoom = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogBuildingRoom} />
    );
  };

  //Buttons
  const onGenerate = (e) => {};
  const onClear = (e) => {
    setBuildingName("");
    setBuildingCategory("");
    setBuildingType("");
    setBuildingColor("");
    setBuildingEnterance("");
    setBuildingRoom("");
    setBuildingSmell("");
    setBuildingSound("");
    setBuildingStyle("");
    setBuildingWindow("");
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Building Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={style.btnWrapper}>
            <button onClick={onGenerate} className={style.btnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.btnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Building Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            {nameText}
            {buildingCategoryDrop}
            {buildingTypeDialog}
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Building Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            {buildingStyleDrop}
            {buildingColorDrop}
            {buildingSoundDrop}
            {enteranceNumber}
            {windowNumber}
          </div>
          <h1 className={style.subHeader} onClick={showRooms}>
            Room Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            {enteranceNumber}
          </div>
        </div>
        {/* Main Display */}
        <div className={style.display}>
          <h1>{buildingName}</h1>
          <h2>
            Category:{" "}
            <span className={style.minorText2}>{buildingCategory}</span>
          </h2>
          <h2>
            Type: <span className={style.minorText2}>{buildingType}</span>
          </h2>
          <h2>
            Building Style:{" "}
            <span className={style.minorText2}>{buildingStyle}</span>
          </h2>
          <h2>
            Building Color:{" "}
            <span className={style.minorText2}>{buildingColor}</span>
          </h2>
          <h2>
            Building Ambiance:{" "}
            <span className={style.minorText2}>{buildingSound}</span>
          </h2>
          <h2>
            Building Enterances:{" "}
            <span className={style.minorText2}>{buildingEnterance}</span>
          </h2>
          <h2>
            Building Windows:{" "}
            <span className={style.minorText2}>{buildingWindow}</span>
          </h2>
          <h2>
            Room Count: <span className={style.minorText2}>{}</span>
          </h2>
          <h2>
            Room Type: <span className={style.minorText2}>{}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BuildingGen;
