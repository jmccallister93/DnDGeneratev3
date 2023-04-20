import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ClearButton from "../components/ClearButton";
import GenerateButton from "../components/GenerateButton";
import MultipleDisplay from "../components/MultipleDisplay";
import CustomDataTable from "../components/CustomDataTable";
import CustomDropdown from "../components/CustomDropDown";
import CustomInputText from "../components/CustomInputText";
import ExportButtons from "../components/ExportButtons";
import { Tooltip } from "primereact/tooltip";
import InfoModal from "../components/InfoModal";
import SectionRandom from "../components/SectionRandom";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import { SessionContext } from "../config/SessionContext";

const FactionGen = () => {
  const session = useContext(SessionContext);

  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isResourceActive, setIsResourceActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isBuildingActive, setIsBuildingActive] = useState(false);
  const [isMemberActive, setIsMemberActive] = useState(false);
  const [isMembershipActive, setIsMembershipActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

  const [factionName, setFactionName] = useState("");
  const [factionNames, setFactionNames] = useState("");
  const [factionNameOptions, setFactionNameOptions] = useState("");

  const [wealth, setWealth] = useState("");
  const [wealths, setWealths] = useState("");
  const [wealthOptions, setWealthOptions] = useState("");

  const [income, setIncome] = useState("");
  const [incomes, setIncomes] = useState("");
  const [incomeOptions, setIncomeOptions] = useState("");
  const [selectedIncome, setSelectedIncome] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [itemList, setItemList] = useState([]);

  const [influence, setInfluence] = useState("");
  const [influences, setInfluences] = useState("");
  const [influenceOptions, setInfluenceOptions] = useState("");

  const [influenceTactic, setInfluenceTactic] = useState("");
  const [influenceTactics, setInfluenceTactics] = useState("");
  const [influenceTacticOptions, setInfluenceTacticOptions] = useState("");
  const [selectedInfluenceTactic, setSelectedInfluenceTactic] = useState([]);
  const [influenceTacticList, setInfluenceTacticList] = useState([]);

  const [favored, setFavored] = useState("");
  const [favoreds, setFavoreds] = useState("");
  const [favoredOptions, setFavoredOptions] = useState("");
  const [selectedFavored, setSelectedFavored] = useState([]);
  const [favoredList, setFavoredList] = useState([]);

  const [positive, setPositive] = useState("");
  const [positives, setPositives] = useState("");
  const [positiveOptions, setPositiveOptions] = useState("");
  const [selectedPositive, setSelectedPositive] = useState([]);
  const [positiveList, setPositiveList] = useState([]);

  const [neutral, setNeutral] = useState("");
  const [neutrals, setNeutrals] = useState("");
  const [neutralOptions, setNeutralOptions] = useState("");
  const [selectedNeutral, setSelectedNeutral] = useState([]);
  const [neutralList, setNeutralList] = useState([]);

  const [unwelcome, setUnwelcome] = useState("");
  const [unwelcomes, setUnwelcomes] = useState("");
  const [unwelcomeOptions, setUnwelcomeOptions] = useState("");
  const [selectedUnwelcome, setSelectedUnwelcome] = useState([]);
  const [unwelcomeList, setUnwelcomeList] = useState([]);

  const [intolerant, setIntolerant] = useState("");
  const [intolerants, setIntolerants] = useState("");
  const [intolerantOptions, setIntolerantOptions] = useState("");
  const [selectedIntolerant, setSelectedIntolerant] = useState([]);
  const [intolerantList, setIntolerantList] = useState([]);

  const [service, setService] = useState("");
  const [services, setServices] = useState("");
  const [serviceOptions, setServiceOptions] = useState("");
  const [selectedService, setSelectedService] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  const [structure, setStructure] = useState("");
  const [structures, setStructures] = useState("");
  const [structureOptions, setStructureOptions] = useState("");

  const [initiation, setInitiation] = useState("");
  const [initiations, setInitiations] = useState("");
  const [initiationOptions, setInitiationOptions] = useState("");
  const [selectedInitiation, setSelectedInitiation] = useState([]);
  const [initiationList, setInitiationList] = useState([]);

  const [lowRole, setLowRole] = useState("");
  const [lowRoles, setLowRoles] = useState("");
  const [lowRoleOptions, setLowRoleOptions] = useState("");
  const [selectedLowRole, setSelectedLowRole] = useState([]);
  const [lowRoleList, setLowRoleList] = useState([]);

  const [mediumRole, setMediumRole] = useState("");
  const [mediumRoles, setMediumRoles] = useState("");
  const [mediumRoleOptions, setMediumRoleOptions] = useState("");
  const [selectedMediumRole, setSelectedMediumRole] = useState([]);
  const [mediumRoleList, setMediumRoleList] = useState([]);

  const [highRole, setHighRole] = useState("");
  const [highRoles, setHighRoles] = useState("");
  const [highRoleOptions, setHighRoleOptions] = useState("");
  const [selectedHighRole, setSelectedHighRole] = useState([]);
  const [highRoleList, setHighRoleList] = useState([]);

  const [quest, setQuest] = useState("");
  const [quests, setQuests] = useState("");
  const [questOptions, setQuestOptions] = useState("");
  const [selectedQuest, setSelectedQuest] = useState([]);
  const [questList, setQuestList] = useState([]);

  const [advance, setAdvance] = useState("");
  const [advances, setAdvances] = useState("");
  const [advanceOptions, setAdvanceOptions] = useState("");
  const [selectedAdvance, setSelectedAdvance] = useState([]);
  const [advanceList, setAdvanceList] = useState([]);

  const [belief, setBelief] = useState("");
  const [beliefs, setBeliefs] = useState("");
  const [beliefOptions, setBeliefOptions] = useState("");
  const [selectedBelief, setSelectedBelief] = useState([]);
  const [beliefList, setBeliefList] = useState([]);

  const [orgType, setOrgType] = useState("");
  const [orgTypes, setOrgTypes] = useState("");
  const [orgTypeOptions, setOrgTypeOptions] = useState("");
  const [selectedOrgType, setSelectedOrgType] = useState([]);
  const [orgTypeList, setOrgTypeList] = useState([]);

  const [headquarter, setHeadquarter] = useState("");
  const [headquarters, setHeadquarters] = useState("");
  const [headquarterOptions, setHeadquarterOptions] = useState("");
  const [selectedHeadquarter, setSelectedHeadquarter] = useState([]);
  const [headquarterList, setHeadquarterList] = useState([]);

  const [building, setBuilding] = useState("");
  const [buildings, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState([]);
  const [buildingList, setBuildingList] = useState([]);

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState("");
  const [locationOptions, setLocationOptions] = useState("");
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const [stronghold, setStronghold] = useState("");
  const [strongholds, setStrongholds] = useState("");
  const [strongholdOptions, setStrongholdOptions] = useState("");
  const [selectedStronghold, setSelectedStronghold] = useState([]);
  const [strongholdList, setStrongholdList] = useState([]);

  const [resource, setResource] = useState("");
  const [resources, setResources] = useState("");
  const [resourceOptions, setResourceOptions] = useState("");
  const [selectedResource, setSelectedResource] = useState([]);
  const [resourceList, setResourceList] = useState([]);

  const [defense, setDefense] = useState("");
  const [defenses, setDefenses] = useState("");
  const [defenseOptions, setDefenseOptions] = useState("");

  const [origin, setOrigin] = useState("");
  const [origins, setOrigins] = useState("");
  const [originOptions, setOriginOptions] = useState("");

  const [motive, setMotive] = useState("");
  const [motives, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");
  const [selectedMotive, setSelectedMotive] = useState([]);
  const [motiveList, setMotiveList] = useState([]);

  const [power, setPower] = useState("");
  const [powers, setPowers] = useState("");
  const [powerOptions, setPowerOptions] = useState("");
  const [selectedPower, setSelectedPower] = useState([]);
  const [powerList, setPowerList] = useState([]);

  const [specialty, setSpecialty] = useState("");
  const [specialtys, setSpecialtys] = useState("");
  const [specialtyOptions, setSpecialtyOptions] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState([]);
  const [specialtyList, setSpecialtyList] = useState([]);

  const [weakness, setWeakness] = useState("");
  const [weaknesss, setWeaknesss] = useState("");
  const [weaknessOptions, setWeaknessOptions] = useState("");
  const [selectedWeakness, setSelectedWeakness] = useState([]);
  const [weaknessList, setWeaknessList] = useState([]);

  const [logo, setLogo] = useState("");
  const [logos, setLogos] = useState("");
  const [logoOptions, setLogoOptions] = useState("");

  const [leader, setLeader] = useState("");
  const [leaders, setLeaders] = useState("");
  const [leaderOptions, setLeaderOptions] = useState("");

  const [organization, setOrganization] = useState({});
  const divRef = useRef(null);

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showResources = (e) => {
    setIsResourceActive((current) => !current);
  };
  const showMembers = (e) => {
    setIsMemberActive((current) => !current);
  };
  const showMemberships = (e) => {
    setIsMembershipActive((current) => !current);
  };
  const showBuildings = (e) => {
    setIsBuildingActive((current) => !current);
  };
  const showFeature = (e) => {
    setIsFeatureActive((current) => !current);
  };
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

  //Create location object to be exported
  useEffect(() => {
    const itemNames = selectedItem.map((item) => item.name);
    const itemString = itemNames.join(", ");
    const influenceTacticNames = selectedInfluenceTactic.map(
      (influenceTactic) => influenceTactic.name
    );
    const influenceTacticString = influenceTacticNames.join(", ");
    const favoredNames = selectedFavored.map((favored) => favored.name);
    const favoredString = favoredNames.join(", ");
    const positiveNames = selectedPositive.map((positive) => positive.name);
    const positiveString = positiveNames.join(", ");
    const neutralNames = selectedNeutral.map((neutral) => neutral.name);
    const neutralString = neutralNames.join(", ");
    const unwelcomeNames = selectedUnwelcome.map((unwelcome) => unwelcome.name);
    const unwelcomeString = unwelcomeNames.join(", ");
    const intolerantNames = selectedIntolerant.map(
      (intolerant) => intolerant.name
    );
    const intolerantString = intolerantNames.join(", ");
    const serviceNames = selectedService.map((service) => service.name);
    const serviceString = serviceNames.join(", ");
    const initiationNames = selectedInitiation.map(
      (initiation) => initiation.name
    );
    const initiationString = initiationNames.join(", ");
    const lowRoleNames = selectedLowRole.map((lowRole) => lowRole.name);
    const lowRoleString = lowRoleNames.join(", ");
    const mediumRoleNames = selectedMediumRole.map(
      (mediumRole) => mediumRole.name
    );
    const mediumRoleString = mediumRoleNames.join(", ");
    const highRoleNames = selectedHighRole.map((highRole) => highRole.name);
    const highRoleString = highRoleNames.join(", ");
    const questNames = selectedQuest.map((quest) => quest.name);
    const questString = questNames.join(", ");
    const advanceNames = selectedAdvance.map((advance) => advance.name);
    const advanceString = advanceNames.join(", ");
    const beliefNames = selectedBelief.map((belief) => belief.name);
    const beliefString = beliefNames.join(", ");
    const orgTypeNames = selectedOrgType.map((orgType) => orgType.name);
    const orgTypeString = orgTypeNames.join(", ");
    const headquarterNames = selectedHeadquarter.map(
      (headquarter) => headquarter.name
    );
    const headquarterString = headquarterNames.join(", ");
    const buildingNames = selectedBuilding.map((building) => building.name);
    const buildingString = buildingNames.join(", ");
    const locationNames = selectedLocation.map((location) => location.name);
    const locationString = locationNames.join(", ");
    const strongholdNames = selectedStronghold.map(
      (stronghold) => stronghold.name
    );
    const strongholdString = strongholdNames.join(", ");
    const resourceNames = selectedResource.map((resource) => resource.name);
    const resourceString = resourceNames.join(", ");
    const motiveNames = selectedMotive.map((motive) => motive.name);
    const motiveString = motiveNames.join(", ");
    const powerNames = selectedPower.map((power) => power.name);
    const powerString = powerNames.join(", ");
    const specialtyNames = selectedSpecialty.map((specialty) => specialty.name);
    const specialtyString = specialtyNames.join(", ");
    const weaknessNames = selectedWeakness.map((weakness) => weakness.name);
    const weaknessString = weaknessNames.join(", ");

    const organization = {
      name: factionName,
      wealth: wealth,
      influence: influence,
      structure: structure,
      defense: defense,
      origin: origin,
      logo: logo,
      leader: leader,
      income: income,
      item: itemString,
      influenceTactic: influenceTacticString,
      favored: favoredString,
      positive: positiveString,
      neutral: neutralString,
      unwelcome: unwelcomeString,
      intolerant: intolerantString,
      service: serviceString,
      initiation: initiationString,
      lowRole: lowRoleString,
      mediumRole: mediumRoleString,
      highRole: highRoleString,
      quest: questString,
      advance: advanceString,
      belief: beliefString,
      orgType: orgTypeString,
      headquarter: headquarterString,
      building: buildingString,
      location: locationString,
      stronghold: strongholdString,
      resource: resourceString,
      motive: motiveString,
      power: powerString,
      specialty: specialtyString,
      weakness: weaknessString,
      // email: session.user.email,
    };
    setOrganization(organization);
  }, [
    factionName,
    wealth,
    influence,
    structure,
    defense,
    origin,
    logo,
    leader,
    selectedIncome,
    selectedItem,
    selectedInfluenceTactic,
    selectedFavored,
    selectedPositive,
    selectedNeutral,
    selectedUnwelcome,
    selectedIntolerant,
    selectedService,
    selectedInitiation,
    selectedLowRole,
    selectedMediumRole,
    selectedHighRole,
    selectedQuest,
    selectedAdvance,
    selectedBelief,
    selectedOrgType,
    selectedHeadquarter,
    selectedBuilding,
    selectedLocation,
    selectedStronghold,
    selectedResource,
    selectedMotive,
    selectedPower,
    selectedSpecialty,
    selectedWeakness,
    income,
    session,
  ]);

  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Factions for your games.</p>
      <p>
        You can use the Generate button in the top left to randomly set all
        fields to random values.
      </p>
      <p>
        You can also use the Generate button in each section to randomly set the
        fields in that section.
      </p>
      <p>You can also manually set the fields to whatever you want.</p>
      <p>
        Once a value has been set you can click on the field in the display to
        edit it.
      </p>
      <p>
        Once you have set all the fields to your liking, you can click the
        Export button to export the NPC to file of your choice.
      </p>
    </div>
  );
  return (
    <div className={style.mainWrapper}>
      <div className={style.topHeader}>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[
                wealth,
                influence,
                structure,
                defense,
                orgType,
                logo,
                leader,
                headquarter,
              ]}
              itemOptions={[
                wealthOptions,
                influenceOptions,
                structureOptions,
                defenseOptions,
                orgTypeOptions,
                logoOptions,
                leaderOptions,
                headquarterOptions,
              ]}
              setItem={[
                setWealth,
                setInfluence,
                setStructure,
                setDefense,
                setOrgType,
                setLogo,
                setLeader,
                setHeadquarter,
              ]}
              selectedItems={[
                selectedMotive,
                selectedIncome,
                selectedResource,
                selectedFavored,
                selectedPositive,
                selectedNeutral,
                selectedUnwelcome,
                selectedIntolerant,
                selectedInitiation,
                selectedLowRole,
                selectedMediumRole,
                selectedHighRole,
                selectedAdvance,
                selectedInfluenceTactic,
                selectedService,
                selectedQuest,
                selectedPower,
                selectedSpecialty,
                selectedWeakness,
                selectedBuilding,
                selectedLocation,
                selectedStronghold,
              ]}
              setSelectedItem={[
                setSelectedMotive,
                setSelectedIncome,
                setSelectedResource, 
                setSelectedFavored,
                setSelectedPositive,
                setSelectedNeutral,
                setSelectedUnwelcome,
                setSelectedIntolerant,
                setSelectedInitiation, 
                setSelectedLowRole,
                setSelectedMediumRole,
                setSelectedHighRole,
                setSelectedAdvance,
                setSelectedInfluenceTactic,
                setSelectedService,
                setSelectedQuest,
                setSelectedPower,
                setSelectedSpecialty,
                setSelectedWeakness,
                setSelectedBuilding,
                setSelectedLocation,
                setSelectedStronghold,
              ]}
              selectedItemOptions={[
                motiveOptions,
                incomeOptions,
                resourceOptions,  
                favoredOptions,
                positiveOptions,
                neutralOptions,
                unwelcomeOptions,
                intolerantOptions,
                initiationOptions,
                lowRoleOptions,
                mediumRoleOptions,
                highRoleOptions,
                advanceOptions,
                influenceTacticOptions,
                serviceOptions,
                questOptions,
                powerOptions,
                specialtyOptions,
                weaknessOptions,
                buildingOptions,
                locationOptions,
                strongholdOptions, 
              ]}
            />
            <ClearButton
              setStringState={[
                setWealth,
                setInfluence,
                setStructure,
                setDefense,
                setOrigin,
                setLogo,
                setLeader,
                setOrgType,
              ]}
              setArrayState={[
                setSelectedIncome,
                setSelectedInfluenceTactic,
                setSelectedFavored,
                setSelectedPositive,
                setSelectedNeutral,
                setSelectedUnwelcome,
                setSelectedIntolerant,
                setSelectedService,
                setSelectedInitiation,
                setSelectedLowRole,
                setSelectedMediumRole,
                setSelectedHighRole,
                setSelectedQuest,
                setSelectedAdvance,
                setSelectedBelief,
                setSelectedHeadquarter,
                setSelectedBuilding,
                setSelectedLocation,
                setSelectedStronghold,
                setSelectedResource,
                setSelectedMotive,
                setSelectedPower,
                setSelectedSpecialty,
                setSelectedWeakness,
              ]}
            />
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons
                  div={divRef}
                  data={organization}
                  tableName={"DBorganization"}
                />
              </div>
            </h1>
            <div className={style.infoCircle}>
              <i className="pi pi-info-circle" onClick={showInfo}>
                <Tooltip
                  target=".pi-info-circle"
                  position="bottom"
                  content="How To Use Guide"
                />
                <InfoModal
                  header={"NPC Generator Info"}
                  content={infoContent}
                  visible={isInfoActive}
                  setVisible={setIsInfoActive}
                />
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Orginization Options</h1>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBasics}>
              Basic Info{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[structure, logo]}
              setValue={[setStructure, setLogo]}
              valueOptions={[structureOptions, logoOptions]}
              selectedValue={[selectedOrgType, selectedMotive]}
              setSelectedValue={[setSelectedOrgType, setSelectedMotive]}
              selectedValueOptions={[orgTypeOptions, motiveOptions]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Organization Name"}
                input={factionName}
                setInput={setFactionName}
                placeholder={"Set Org. Name"}
              />
              <CustomDropdown
                tableName={"orgStructure"}
                setSingular={setStructure}
                setPlural={setStructures}
                setOptions={setStructureOptions}
                options={structureOptions}
                h1Title={"Organization Structure"}
                placeholder={"Set Structure"}
                value={structure}
                valueOptions={structureOptions}
              />
              <CustomDropdown
                tableName={"orgLogo"}
                setSingular={setLogo}
                setPlural={setLogos}
                setOptions={setLogoOptions}
                options={logoOptions}
                h1Title={"Logo"}
                placeholder={"Set Logo"}
                value={logo}
                valueOptions={logoOptions}
              />
              <CustomDropdown
                tableName={"orgType"}
                setSingular={setOrgType}
                setPlural={setOrgTypes}
                setOptions={setOrgTypeOptions}
                options={orgTypeOptions}
                h1Title={"Organization Type"}
                placeholder={"Set Type"}
                value={orgType}
                valueOptions={orgTypeOptions}
              />
              <CustomDataTable
                tableName={"orgMotive"}
                setSingular={setMotive}
                setPlural={setMotives}
                setOptions={setMotiveOptions}
                h1Title={"Motives"}
                dialogHeader={"Motives"}
                selectedItem={selectedMotive}
                setSelectedItem={setSelectedMotive}
                list={motiveList}
                setList={setMotiveList}
                valueOptions={motiveOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showResources}>
              Resources{" "}
              {isResourceActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[wealth]}
              setValue={[setWealth]}
              valueOptions={[wealthOptions]}
              selectedValue={[selectedIncome, selectedResource]}
              setSelectedValue={[setSelectedIncome, setSelectedResource]}
              selectedValueOptions={[incomeOptions, resourceOptions]}
            />
          </div>
          <div className={isResourceActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"orgWealth"}
                setSingular={setWealth}
                setPlural={setWealths}
                setOptions={setWealthOptions}
                options={wealthOptions}
                h1Title={"Wealth"}
                placeholder={"Set Wealth"}
                value={wealth}
                valueOptions={wealthOptions}
              />
              <CustomDataTable
                tableName={"orgIncome"}
                setSingular={setIncome}
                setPlural={setIncomes}
                setOptions={setIncomeOptions}
                h1Title={"Income"}
                dialogHeader={"Income"}
                selectedItem={selectedIncome}
                setSelectedItem={setSelectedIncome}
                list={incomeList}
                setList={setIncomeList}
                valueOptions={incomeOptions}
              />
              <CustomDataTable
                tableName={"orgResource"}
                setSingular={setResource}
                setPlural={setResources}
                setOptions={setResourceOptions}
                h1Title={"Resources"}
                dialogHeader={"Resources"}
                selectedItem={selectedResource}
                setSelectedItem={setSelectedResource}
                list={resourceList}
                setList={setResourceList}
                valueOptions={resourceOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showMembers}>
              Members{" "}
              {isMemberActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[leader]}
              setValue={[setLeader]}
              valueOptions={[leaderOptions]}
            />
          </div>
          <div className={isMemberActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setLeader}
                setPlural={setLeaders}
                setOptions={setLeaderOptions}
                options={leaderOptions}
                h1Title={"Leader"}
                placeholder={"Set Leader"}
                value={leader}
                valueOptions={leaderOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showMemberships}>
              Membership{" "}
              {isMembershipActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[
                selectedFavored,
                selectedPositive,
                selectedNeutral,
                selectedUnwelcome,
                selectedIntolerant,
                selectedInitiation,
                selectedLowRole,
                selectedMediumRole,
                selectedHighRole,
                selectedAdvance,
              ]}
              setSelectedValue={[
                setSelectedFavored,
                setSelectedPositive,
                setSelectedNeutral,
                setSelectedUnwelcome,
                setSelectedIntolerant,
                setSelectedInitiation,
                setSelectedLowRole,
                setSelectedMediumRole,
                setSelectedHighRole,
                setSelectedAdvance,
              ]}
              selectedValueOptions={[
                favoredOptions,
                positiveOptions,
                neutralOptions,
                unwelcomeOptions,
                intolerantOptions,
                initiationOptions,
                lowRoleOptions,
                mediumRoleOptions,
                highRoleOptions,
                advanceOptions,
              ]}
            />
          </div>
          <div className={isMembershipActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"races"}
                setSingular={setFavored}
                setPlural={setFavoreds}
                setOptions={setFavoredOptions}
                h1Title={"Favored Members"}
                dialogHeader={"Favored Members"}
                selectedItem={selectedFavored}
                setSelectedItem={setSelectedFavored}
                list={favoredList}
                setList={setFavoredList}
                valueOptions={favoredOptions}
              />
              <CustomDataTable
                tableName={"races"}
                setSingular={setPositive}
                setPlural={setPositives}
                setOptions={setPositiveOptions}
                h1Title={"Positive Members"}
                dialogHeader={"Positive Members"}
                selectedItem={selectedPositive}
                setSelectedItem={setSelectedPositive}
                list={positiveList}
                setList={setPositiveList}
                valueOptions={positiveOptions}
              />
              <CustomDataTable
                tableName={"races"}
                setSingular={setNeutral}
                setPlural={setNeutrals}
                setOptions={setNeutralOptions}
                h1Title={"Neutral Members"}
                dialogHeader={"Neutral Members"}
                selectedItem={selectedNeutral}
                setSelectedItem={setSelectedNeutral}
                list={neutralList}
                setList={setNeutralList}
                valueOptions={neutralOptions}
              />
              <CustomDataTable
                tableName={"races"}
                setSingular={setUnwelcome}
                setPlural={setUnwelcomes}
                setOptions={setUnwelcomeOptions}
                h1Title={"Unwelcome Members"}
                dialogHeader={"Unwelcome Members"}
                selectedItem={selectedUnwelcome}
                setSelectedItem={setSelectedUnwelcome}
                list={unwelcomeList}
                setList={setUnwelcomeList}
                valueOptions={unwelcomeOptions}
              />
              <CustomDataTable
                tableName={"races"}
                setSingular={setIntolerant}
                setPlural={setIntolerants}
                setOptions={setIntolerantOptions}
                h1Title={"Intolerant Members"}
                dialogHeader={"Intolerant Members"}
                selectedItem={selectedIntolerant}
                setSelectedItem={setSelectedIntolerant}
                list={intolerantList}
                setList={setIntolerantList}
                valueOptions={intolerantOptions}
              />
              <CustomDataTable
                tableName={"orgInitiation"}
                setSingular={setInitiation}
                setPlural={setInitiations}
                setOptions={setInitiationOptions}
                h1Title={"Initiation"}
                dialogHeader={"Initiation"}
                selectedItem={selectedInitiation}
                setSelectedItem={setSelectedInitiation}
                list={initiationList}
                setList={setInitiationList}
                valueOptions={initiationOptions}
              />
              <CustomDataTable
                tableName={"orgLowRank"}
                setSingular={setLowRole}
                setPlural={setLowRoles}
                setOptions={setLowRoleOptions}
                h1Title={"Low Rank Roles"}
                dialogHeader={"Low Rank Roles"}
                selectedItem={selectedLowRole}
                setSelectedItem={setSelectedLowRole}
                list={lowRoleList}
                setList={setLowRoleList}
                valueOptions={lowRoleOptions}
              />
              <CustomDataTable
                tableName={"orgMediumRank"}
                setSingular={setMediumRole}
                setPlural={setMediumRoles}
                setOptions={setMediumRoleOptions}
                h1Title={"Medium Rank Roles"}
                dialogHeader={"Medium Rank Roles"}
                selectedItem={selectedMediumRole}
                setSelectedItem={setSelectedMediumRole}
                list={mediumRoleList}
                setList={setMediumRoleList}
                valueOptions={mediumRoleOptions}
              />
              <CustomDataTable
                tableName={"orgHighRank"}
                setSingular={setHighRole}
                setPlural={setHighRoles}
                setOptions={setHighRoleOptions}
                h1Title={"High Rank Roles"}
                dialogHeader={"High Rank Roles"}
                selectedItem={selectedHighRole}
                setSelectedItem={setSelectedHighRole}
                list={highRoleList}
                setList={setHighRoleList}
                valueOptions={highRoleOptions}
              />
              <CustomDataTable
                tableName={"orgAdvancement"}
                setSingular={setAdvance}
                setPlural={setAdvances}
                setOptions={setAdvanceOptions}
                h1Title={"Advancement"}
                dialogHeader={"Advancement"}
                selectedItem={selectedAdvance}
                setSelectedItem={setSelectedAdvance}
                list={advanceList}
                setList={setAdvanceList}
                valueOptions={advanceOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showFeature}>
              Features{" "}
              {isFeatureActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[influence]}
              setValue={[setInfluence]}
              valueOptions={[influenceOptions]}
              selectedValue={[
                selectedInfluenceTactic,
                selectedService,
                selectedQuest,
                selectedPower,
                selectedSpecialty,
                selectedWeakness,
              ]}
              setSelectedValue={[
                setSelectedInfluenceTactic,
                setSelectedService,
                setSelectedQuest,
                setSelectedPower,
                setSelectedSpecialty,
                setSelectedWeakness,
              ]}
              selectedValueOptions={[
                influenceTacticOptions,
                serviceOptions,
                questOptions,
                powerOptions,
                specialtyOptions,
                weaknessOptions,
              ]}
            />
          </div>
          <div className={isFeatureActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"orgInfluenceLevel"}
                setSingular={setInfluence}
                setPlural={setInfluences}
                setOptions={setInfluenceOptions}
                options={influenceOptions}
                h1Title={"Influence"}
                placeholder={"Set Influence"}
                value={influence}
                valueOptions={influenceOptions}
              />
              <CustomDataTable
                tableName={"orgInfluenceTactic"}
                setSingular={setInfluenceTactic}
                setPlural={setInfluenceTactics}
                setOptions={setInfluenceTacticOptions}
                h1Title={"Influence Tactics"}
                dialogHeader={"Influence Tactics"}
                selectedItem={selectedInfluenceTactic}
                setSelectedItem={setSelectedInfluenceTactic}
                list={influenceTacticList}
                setList={setInfluenceTacticList}
                valueOptions={influenceTacticOptions}
              />
              <CustomDataTable
                tableName={"orgService"}
                setSingular={setService}
                setPlural={setServices}
                setOptions={setServiceOptions}
                h1Title={"Services"}
                dialogHeader={"Services"}
                selectedItem={selectedService}
                setSelectedItem={setSelectedService}
                list={serviceList}
                setList={setServiceList}
                valueOptions={serviceOptions}
              />
              <CustomDataTable
                tableName={"orgQuest"}
                setSingular={setQuest}
                setPlural={setQuests}
                setOptions={setQuestOptions}
                h1Title={"Quests"}
                dialogHeader={"Quests"}
                selectedItem={selectedQuest}
                setSelectedItem={setSelectedQuest}
                list={questList}
                setList={setQuestList}
                valueOptions={questOptions}
              />
              <CustomDataTable
                tableName={"orgPowerSource"}
                setSingular={setPower}
                setPlural={setPowers}
                setOptions={setPowerOptions}
                h1Title={"Power Sources"}
                dialogHeader={"Power Sources"}
                selectedItem={selectedPower}
                setSelectedItem={setSelectedPower}
                list={powerList}
                setList={setPowerList}
                valueOptions={powerOptions}
              />
              <CustomDataTable
                tableName={"orgSpecialty"}
                setSingular={setSpecialty}
                setPlural={setSpecialtys}
                setOptions={setSpecialtyOptions}
                h1Title={"Specialties"}
                dialogHeader={"Specialties"}
                selectedItem={selectedSpecialty}
                setSelectedItem={setSelectedSpecialty}
                list={specialtyList}
                setList={setSpecialtyList}
                valueOptions={specialtyOptions}
              />
              <CustomDataTable
                tableName={"orgWeakness"}
                setSingular={setWeakness}
                setPlural={setWeaknesss}
                setOptions={setWeaknessOptions}
                h1Title={"Weakness"}
                dialogHeader={"Weakness"}
                selectedItem={selectedWeakness}
                setSelectedItem={setSelectedWeakness}
                list={weaknessList}
                setList={setWeaknessList}
                valueOptions={weaknessOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBuildings}>
              Buildings{" "}
              {isBuildingActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[defense, headquarter]}
              setValue={[setDefense, setHeadquarter]}
              valueOptions={[defenseOptions, headquarterOptions]}
              selectedValue={[
                selectedBuilding,
                selectedLocation,
                selectedStronghold,
              ]}
              setSelectedValue={[
                setSelectedBuilding,
                setSelectedLocation,
                setSelectedStronghold,
              ]}
              selectedValueOptions={[
                buildingOptions,
                locationOptions,
                strongholdOptions,
              ]}
            />
          </div>
          <div className={isBuildingActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"orgDefense"}
                setSingular={setDefense}
                setPlural={setDefenses}
                setOptions={setDefenseOptions}
                options={defenseOptions}
                h1Title={"Defense Level"}
                placeholder={"Set Defense"}
                value={defense}
                valueOptions={defenseOptions}
              />
              <CustomDropdown
                tableName={"orgHeadquarter"}
                setSingular={setHeadquarter}
                setPlural={setHeadquarters}
                setOptions={setHeadquarterOptions}
                options={headquarterOptions}
                h1Title={"Headquarters"}
                placeholder={"Set Headquarters"}
                value={headquarter}
                valueOptions={headquarterOptions}
              />
              <CustomDataTable
                tableName={"orgOwnedBuilding"}
                setSingular={setBuilding}
                setPlural={setBuildings}
                setOptions={setBuildingOptions}
                h1Title={"Owned Buildings"}
                dialogHeader={"Owned Buildings"}
                selectedItem={selectedBuilding}
                setSelectedItem={setSelectedBuilding}
                list={buildingList}
                setList={setBuildingList}
                valueOptions={buildingOptions}
              />
              <CustomDataTable
                tableName={"orgLocation"}
                setSingular={setLocation}
                setPlural={setLocations}
                setOptions={setLocationOptions}
                h1Title={"Locations"}
                dialogHeader={"Locations"}
                selectedItem={selectedLocation}
                setSelectedItem={setSelectedLocation}
                list={locationList}
                setList={setLocationList}
                valueOptions={locationOptions}
              />
              <CustomDataTable
                tableName={"orgStronghold"}
                setSingular={setStronghold}
                setPlural={setStrongholds}
                setOptions={setStrongholdOptions}
                h1Title={"Strongholds"}
                dialogHeader={"Strongholds"}
                selectedItem={selectedStronghold}
                setSelectedItem={setSelectedStronghold}
                list={strongholdList}
                setList={setStrongholdList}
                valueOptions={strongholdOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display} ref={divRef}>
          <NameDisplay value={factionName} setNewValue={setFactionName} />
          <h2>
            Org. Structure{" "}
            <SingleDisplayText value={structure} setNewValue={setStructure} />
          </h2>

          <h2>
            Logo <SingleDisplayText value={logo} setNewValue={setLogo} />
          </h2>
          <h2>
            Org. Type{" "}
            <span className={style.minorText2}>
              <SingleDisplayText
                value={orgType}
                setNewValue={setSelectedOrgType}
              />
            </span>
          </h2>
          <h2>
            Motives{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMotive}
                setNewValue={setSelectedMotive}
              />
            </span>
          </h2>

          <h1>Resources</h1>
          <hr className={style.lineBreak} />
          <h2>
            Wealth <SingleDisplayText value={wealth} setNewValue={setWealth} />
          </h2>
          <h2>
            Income Source{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedIncome}
                setNewValue={setSelectedIncome}
              />
            </span>
          </h2>

          <h2>
            Resources{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedResource}
                setNewValue={setSelectedResource}
              />
            </span>
          </h2>
          <h1>Members</h1>
          <hr className={style.lineBreak} />
          <h2>
            Leader <SingleDisplayText value={leader} setNewValue={setLeader} />
          </h2>
          <h2>
            Important Members <SingleDisplayText />
          </h2>
          <h1>Membership</h1>
          <hr className={style.lineBreak} />
          <h2>
            Favored Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedFavored}
                setNewValue={setSelectedFavored}
              />
            </span>
          </h2>
          <h2>
            Positive Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPositive}
                setNewValue={setSelectedPositive}
              />
            </span>
          </h2>
          <h2>
            Neutral Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedNeutral}
                setNewValue={setSelectedNeutral}
              />
            </span>
          </h2>
          <h2>
            Unwelcome Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedUnwelcome}
                setNewValue={setSelectedUnwelcome}
              />
            </span>
          </h2>
          <h2>
            Intolerant Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedIntolerant}
                setNewValue={setSelectedIntolerant}
              />
            </span>
          </h2>
          <h2>
            Initiation{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedInitiation}
                setNewValue={setSelectedInitiation}
              />
            </span>
          </h2>
          <h2>
            Low Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedLowRole}
                setNewValue={setSelectedLowRole}
              />
            </span>
          </h2>
          <h2>
            Medium Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMediumRole}
                setNewValue={setSelectedMediumRole}
              />
            </span>
          </h2>
          <h2>
            High Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedHighRole}
                setNewValue={setSelectedHighRole}
              />
            </span>
          </h2>
          <h2>
            Advancement{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedAdvance}
                setNewValue={setSelectedAdvance}
              />
            </span>
          </h2>
          <h1>Features</h1>
          <hr className={style.lineBreak} />
          <h2>
            Influence Level{" "}
            <SingleDisplayText value={influence} setNewValue={setInfluence} />
          </h2>
          <h2>
            Influence Tactics{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedInfluenceTactic}
                setNewValue={setSelectedInfluenceTactic}
              />
            </span>
          </h2>
          <h2>
            Services{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedService}
                setNewValue={setSelectedService}
              />
            </span>
          </h2>
          <h2>
            Quests{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedQuest}
                setNewValue={setSelectedQuest}
              />
            </span>
          </h2>
          <h2>
            Power Sources{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPower}
                setNewValue={setSelectedPower}
              />
            </span>
          </h2>
          <h2>
            Specialties{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedSpecialty}
                setNewValue={setSelectedSpecialty}
              />
            </span>
          </h2>
          <h2>
            Weakness{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedWeakness}
                setNewValue={setSelectedWeakness}
              />
            </span>
          </h2>
          <h1>Buildings</h1>
          <hr className={style.lineBreak} />
          <h2>
            Defense Level{" "}
            <SingleDisplayText value={defense} setNewValue={setDefense} />
          </h2>
          <h2>
            Headquarters{" "}
            <span className={style.minorText2}>
              <SingleDisplayText
                value={headquarter}
                setNewValue={setHeadquarter}
              />
            </span>
          </h2>
          <h2>
            Owned Buildings{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedBuilding}
                setNewValue={setSelectedBuilding}
              />
            </span>
          </h2>
          <h2>
            Locations{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedLocation}
                setNewValue={setLocationList}
              />
            </span>
          </h2>
          <h2>
            Strongholds{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedStronghold}
                setNewValue={setStrongholdList}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FactionGen;
