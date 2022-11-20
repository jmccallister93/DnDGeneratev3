import Navbar from "../components/Navbar";
import style from "../stylesheets/MonsterGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { e } from "mathjs";

const MonsterGen = () => {

//Set States
  const [fetchError, setFetchError] = useState()

  const [name, setName] = useState("");
  const [names, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();

  const [race, setRace] = useState("");
  const [races, setRaces] = useState();
  const [raceOptions, setRaceOptions] = useState();

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState();
  const [sizeOptions, setSizeOptions] = useState();

  const [type, setType] = useState("");
  const [types, setTypes] = useState();
  const [typeOptions, setTypeOptions] = useState();

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState();
  const [alignOptions, setAlignOptions] = useState();

  const [ac, setAc] = useState("");
  const [acs, setAcs] = useState("");
  const [acOptions, setAcOptions] = useState();

  const [armorType, setArmorType] = useState("");
  const [armorTypes, setArmorTypes] = useState();
  const [armorTypeOptions, setArmorTypeOptions] = useState();

  const [hp, setHp] = useState("");
  const [hps, setHps] = useState("");
  const [hpOptions, setHpOptions] = useState();

  const [speed, setSpeed] = useState("");
  const [speeds, setSpeeds] = useState("");
  const [speedOptions, setSpeedOptions] = useState();

  const [speedType, setSpeedType] = useState("");
  const [speedTypes, setSpeedTypes] = useState("");
  const [speedTypeOptions, setSpeedTypeOptions] = useState();

  const [speedExtra, setSpeedExtra] = useState("");
  const [speedExtras, setSpeedExtras] = useState("");
  const [speedExtraOptions, setSpeedExtraOptions] = useState();

  const [ability, setAbility] = useState("");
  const [abilities, setAbilities] = useState("");
  const [abilityOptions, setAbilityOptions] = useState();

  const [save, setSave] = useState("");
  const [saves, setSaves] = useState("");
  const [saveOptions, setSaveOptions] = useState();

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");
  const [skillOptions, setSkillOptions] = useState();

  const [vuln, setVuln] = useState("");
  const [vulns, setVulns] = useState("");
  const [vulnOptions, setVulnOptions] = useState();

  const [immune, setImmune] = useState("");
  const [immunes, setImmunes] = useState("");
  const [immuneOptions, setImmuneOptions] = useState();

  const [resist, setResist] = useState("");
  const [resists, setResists] = useState("");
  const [resistOptions, setResistOptions] = useState();

  const [condition, setCondition] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionOptions, setConditionOptions] = useState();

  const [sense, setSense] = useState("");
  const [senses, setSenses] = useState("");
  const [senseOptions, setSenseOptions] = useState();

  const [lang, setLang] = useState("");
  const [langs, setLangs] = useState("");
  const [langOptions, setLangOptions] = useState();

  const [special, setSpecial] = useState("");
  const [Specials, setSpecials] = useState("");
  const [specialOptions, setSpecialOptions] = useState();

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState();

  const [reaction, setReaction] = useState("");
  const [reactions, setReactions] = useState("");
  const [reactionOptions, setReactionOptions] = useState();

  const [legend, setLegend] = useState("");
  const [legends, setLegends] = useState("");
  const [legendOptions, setLegendOptions] = useState();

  const [lair, setLair] = useState("");
  const [Lairs, setLairs] = useState("");
  const [lairOptions, setLairOptions] = useState();

  const [gear, setGear] = useState("");
  const [gears, setGears] = useState("");
  const [gearOptions, setGearOptions] = useState();

//Import Data

//TODO Names
useEffect(() => {})

useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("races").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setRace(null);
        console.log(error);
      }
      if (data) {
        setRaces(data);
        setFetchError(null);
        setRaceOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);  
  
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("sizes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSize(null);
        console.log(error);
      }
      if (data) {
        setSizes(data);
        setFetchError(null);
        setSizeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
    
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setType(null);
        console.log(error);
      }
      if (data) {
        setTypes(data);
        setFetchError(null);
        setTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
    
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("aligns").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAlign(null);
        console.log(error);
      }
      if (data) {
        setAligns(data);
        setFetchError(null);
        setAlignOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("acs").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAc(null);
        console.log(error);
      }
      if (data) {
        setAcs(data);
        setFetchError(null);
        setAcOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsArmor").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setArmorType(null);
        console.log(error);
      }
      if (data) {
        setArmorTypes(data);
        setFetchError(null);
        setArmorTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("movement").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSpeedType(null);
        console.log(error);
      }
      if (data) {
        setSpeedTypes(data);
        setFetchError(null);
        setSpeedTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsArmor").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setArmorType(null);
        console.log(error);
      }
      if (data) {
        setArmorTypes(data);
        setFetchError(null);
        setArmorTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("abilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAbility(null);
        console.log(error);
      }
      if (data) {
        setAbilities(data);
        setFetchError(null);
        setAbilityOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("abilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSave(null);
        console.log(error);
      }
      if (data) {
        setSaves(data);
        setFetchError(null);
        setSaveOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("skills").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSkill(null);
        console.log(error);
      }
      if (data) {
        setSkills(data);
        setFetchError(null);
        setSkillOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("damageTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setVuln(null);
        console.log(error);
      }
      if (data) {
        setVulns(data);
        setFetchError(null);
        setVulnOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("damageTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setImmune(null);
        console.log(error);
      }
      if (data) {
        setImmunes(data);
        setFetchError(null);
        setImmuneOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("damageTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setResist(null);
        console.log(error);
      }
      if (data) {
        setResists(data);
        setFetchError(null);
        setResistOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("conditions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setCondition(null);
        console.log(error);
      }
      if (data) {
        setConditions(data);
        setFetchError(null);
        setConditionOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("sense").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSense(null);
        console.log(error);
      }
      if (data) {
        setSenses(data);
        setFetchError(null);
        setSenseOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("languages").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setLang(null);
        console.log(error);
      }
      if (data) {
        setLangs(data);
        setFetchError(null);
        setLangOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersAbilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSpecial(null);
        console.log(error);
      }
      if (data) {
        setSpecials(data);
        setFetchError(null);
        setSpecialOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersActions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAction(null);
        console.log(error);
      }
      if (data) {
        setActions(data);
        setFetchError(null);
        setActionOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersReactions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setReaction(null);
        console.log(error);
      }
      if (data) {
        setReactions(data);
        setFetchError(null);
        setReactionOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersLegendaryActions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setLegend(null);
        console.log(error);
      }
      if (data) {
        setLegends(data);
        setFetchError(null);
        setLegendOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersLairActions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setLair(null);
        console.log(error);
      }
      if (data) {
        setLairs(data);
        setFetchError(null);
        setLairOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

//TODO
//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase.from("itemsAll").select();
//       if (error) {
//         setFetchError("Could not fetch the data");
//         setGear(null);
//         console.log(error);
//       }
//       if (data) {
//         setGears(data);
//         setFetchError(null);
//         setGearOptions(data.map((r) => ({ name: r.name, value: r.value })));
//       }
//     };
//     fetchData();
//   }, []);

//OnChanges
//TODO
  const onNameChange = (e) => {};
//TODO
  const onRandomName = (e) => {};

  const onRaceChange = (e) => {
    setRace(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (28 - 1) +1);
      setRace(raceOptions[r].name);
    }
  };

  const onSizeChange = (e) => {
    setSize(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (6 - 1) +1);
      setSize(sizeOptions[r].name);
    }
  };

  const onTypeChange = (e) => {
    setType(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (16 - 1) +1);
      setType(typeOptions[r].name);
    }
  };

  const onAlignChange = (e) => { 
    setAlign(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (9 - 1) +1);
      setAlign(alignOptions[r].name);
    }};

  const onAcChange = (e) => {
    setAc(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (30 - 1) +1);
      setAc(acOptions[r].name);
    }
  };

  const onArmorTypeChange = (e) => {
    setArmorType(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (5 - 1) +1);
      setArmorType(armorTypeOptions[r].name);
    }
  };
//TODO
  const onHpChange = (e) => {};
//TODO
  const onSpeedChange = (e) => {};

  const onSpeedTypeChange = (e) => {
    setSpeedType(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (6 - 1) +1);
      setSpeedType(speedTypeOptions[r].name);
    }
  };
//TODO
  const onSpeedExtraChange = (e) => {};
//TODO
  const onAbilityChange = (e) => {};

//   const onSaveChange = (e) => {
//     setRace(e.value);
//     if (e.value === "Random") {
//       let r = Math.round(Math.random() * (28 - 1) +1);
//       setRace(raceOptions[r].name);
//     }
//   };


  const onVulnChange = (e) => {
    setVuln(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) +1);
      setVuln(vulnOptions[r].name);
    }
  };

  const onSkillChange = (e) => {
    setSkill(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (18 - 1) +1);
      setSkill(skillOptions[r].name);
    }
  };

  const onImmuneChange = (e) => {
    setImmune(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) +1);
      setImmune(immuneOptions[r].name);
    }
  };

  const onResistChange = (e) => {
    setResist(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) +1);
      setResist(resistOptions[r].name);
    }
  };

  const onConditionChange = (e) => {
    setCondition(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (15 - 1) +1);
      setCondition(conditionOptions[r].name);
    }
  };

  const onSenseChange = (e) => {
    setSense(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (4 - 1) +1);
      setSense(senseOptions[r].name);
    }
  };

  const onLangChange = (e) => {
    setLang(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (16 - 1) +1);
      setLang(langOptions[r].name);
    }
  };

  const onSpecialChange = (e) => {
    setSpecial(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (208 - 1) +1);
      setSpecial(specialOptions[r].name);
    }
  };

  const onActionChange = (e) => {
    setAction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (292 - 1) +1);
      setAction(actionOptions[r].name);
    }
  };

  const onReactionChange = (e) => {
    setReaction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (11 - 1) +1);
      setReaction(reactionOptions[r].name);
    }
  };

  const onLegendChange = (e) => {
    setLegend(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (35 - 1) +1);
      setLegend(legendOptions[r].name);
    }
  };

  const onLairChange = (e) => {
    setLair(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (39 - 1) +1);
      setLair(lairOptions[r].name);
    }
  };
//TODO
  const onGearChange = (e) => {};

  const onGenerate = (e) => {
    if (bond === "") {
      let r = Math.round(Math.random() * (9 - 1) +1);
      setBond(bondOptions[r].name);
    } else {
      setBond(bond);
    }

    const onClear = (e) => {
        setName("");
        setRace("")
        setSize("")
        setType("")
        setAlign("")
        setAc("")
        setArmorType("")
        setHp("")
        setSpeed("")
        setSpeedType("")
        setSpeedExtra("")
        setAbility("")
        setSave("")
        setSkill("")
        setVuln("")
        setImmune("")
        setResist("")
        setCondition("")
        setSense("")
        setLang("")
        setSpecial("")
        setAction("")
        setReaction("")
        setLegend("")
        setLair("")
        setGear("")
    }

  return (
    <div className={style.monstergenWrapper}>
      <Navbar />
      <div className={style.monstergenBody}>
        <h1 className={style.monstergenHeader}>Monster Generator</h1>
        <div className={style.monstergenOptionsWrapper}>
          <div>
            <h1>Name: </h1>
            <InputText value={name} onChange={onNameChange} />
            <button onClick={onRandomName} className={style.monstergenBtnName}>
              Randomize
            </button>
          </div>
          <div>
            <h1>Race</h1>
            <Dropdown
              optionLabel="name"
              value={race}
              options={raceOptions}
              onChange={onRaceChange}
              placeholder="Choose Race"
            />
          </div>
          <div>
            <h1>Size</h1>
            <Dropdown
              optionLabel="name"
              value={size}
              options={sizeOptions}
              onChange={onSizeChange}
              placeholder="Choose Size"
            />
          </div>
          <div>
            <h1>Type</h1>
            <Dropdown
              optionLabel="name"
              value={type}
              options={typeOptions}
              onChange={onTypeChange}
              placeholder="Choose Type"
            />
          </div>
          <div>
            <h1>Align</h1>
            <Dropdown
              optionLabel="name"
              value={align}
              options={alignOptions}
              onChange={onAlignChange}
              placeholder="Choose Alignment"
            />
          </div>
          <div>
            <h1>AC</h1>
            <Dropdown
              optionLabel="name"
              value={ac}
              options={acOptions}
              onChange={onAcChange}
              placeholder="Choose AC"
            />
          </div>
          <div>
            <h1>Armor Type</h1>
            <Dropdown
              optionLabel="name"
              value={armorType}
              options={armorTypeOptions}
              onChange={onArmorTypeChange}
              placeholder="Choose Armor Type"
            />
          </div>
          <div>
            <h1>HP</h1>
            <Dropdown
              optionLabel="name"
              value={hp}
              options={hpOptions}
              onChange={onHpChange}
              placeholder="Choose HP"
            />
          </div>
          <div>
            <h1>Speed</h1>
            <Dropdown
              optionLabel="name"
              value={speed}
              options={speedOptions}
              onChange={onSpeedChange}
              placeholder="Choose Speed"
            />
          </div>
          <div>
            <h1>Additional Movement</h1>
            <Dropdown
              optionLabel="name"
              value={speedType}
              options={speedTypeOptions}
              onChange={onSpeedTypeChange}
              placeholder="Choose Additional Move"
            />
          </div>
          <div>
            <h1>Additional Move Speed</h1>
            <Dropdown
              optionLabel="name"
              value={speedExtra}
              options={speedExtraOptions}
              onChange={onSpeedExtraChange}
              placeholder="Choose Additional Speed"
            />
          </div>
          <div>
            <h1>Abilities</h1>
            <Dropdown
              optionLabel="name"
              value={ability}
              options={abilityOptions}
              onChange={onAbilityChange}
              placeholder="Choose Ability"
            />
          </div>
          <div>
            <h1>Saves</h1>
            <Dropdown
              optionLabel="name"
              value={save}
              options={saveOptions}
            //   onChange={onSaveChange}
              placeholder="Choose Save"
            />
          </div>
          <div>
            <h1>Skill</h1>
            <Dropdown
              optionLabel="name"
              value={skill}
              options={skillOptions}
              onChange={onSkillChange}
              placeholder="Choose Skill"
            />
          </div>
          <div>
            <h1>Vulnerabities</h1>
            <Dropdown
              optionLabel="name"
              value={vuln}
              options={vulnOptions}
              onChange={onVulnChange}
              placeholder="Choose Vulnerabities"
            />
          </div>
          <div>
            <h1>Immunities</h1>
            <Dropdown
              optionLabel="name"
              value={immune}
              options={immuneOptions}
              onChange={onImmuneChange}
              placeholder="Choose Immunities"
            />
          </div>
          <div>
            <h1>Resistances</h1>
            <Dropdown
              optionLabel="name"
              value={resist}
              options={resistOptions}
              onChange={onResistChange}
              placeholder="Choose Resistances"
            />
          </div>
          <div>
            <h1>Condition Immunities</h1>
            <Dropdown
              optionLabel="name"
              value={condition}
              options={conditionOptions}
              onChange={onConditionChange}
              placeholder="Choose Condition Immunities"
            />
          </div>
          <div>
            <h1>Senses</h1>
            <Dropdown
              optionLabel="name"
              value={sense}
              options={senseOptions}
              onChange={onSenseChange}
              placeholder="Choose Senses"
            />
          </div>
          <div>
            <h1>Languages</h1>
            <Dropdown
              optionLabel="name"
              value={lang}
              options={langOptions}
              onChange={onLangChange}
              placeholder="Choose Languages"
            />
          </div>
          <div>
            <h1>Sepcials</h1>
            <Dropdown
              optionLabel="name"
              value={special}
              options={specialOptions}
              onChange={onSpecialChange}
              placeholder="Choose Specials"
            />
          </div>
          <div>
            <h1>Actions</h1>
            <Dropdown
              optionLabel="name"
              value={action}
              options={actionOptions}
              onChange={onActionChange}
              placeholder="Choose Actions"
            />
          </div>
          <div>
            <h1>Reactions</h1>
            <Dropdown
              optionLabel="name"
              value={reaction}
              options={reactionOptions}
              onChange={onReactionChange}
              placeholder="Choose Reactions"
            />
          </div>
          <div>
            <h1>Legendary Actions</h1>
            <Dropdown
              optionLabel="name"
              value={legend}
              options={legendOptions}
              onChange={onLegendChange}
              placeholder="Choose Legendary Actions"
            />
          </div>
          <div>
            <h1>Lair</h1>
            <Dropdown
              optionLabel="name"
              value={lair}
              options={lairOptions}
              onChange={onLairChange}
              placeholder="Choose Lair Actions"
            />
          </div>
          <div>
            <h1>Gear</h1>
            <Dropdown
              optionLabel="name"
              value={gear}
              options={gearOptions}
              onChange={onGearChange}
              placeholder="Choose Sear"
            />
          </div>
        </div>

        {/* Generate Btns */}
        <div>
          <div className={style.npcgenBtnWrapper}>
            <button onClick={onGenerate} className={style.npcgenBtnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.npcgenBtnClear}>
              Clear
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MonsterGen;
