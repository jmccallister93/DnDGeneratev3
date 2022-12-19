import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const NameGenerator = (props) => {
  const [fetchError, setFetchError] = useState(null);
  const [nameA, setNameA] = useState("");
  const [namesA, setNamesA] = useState([]);
  const [nameAOptions, setNameAOptions] = useState([]);
  const [nameB, setNameB] = useState("");
  const [namesB, setNamesB] = useState([]);
  const [nameBOptions, setNameBOptions] = useState([]);
  const [nameC, setNameC] = useState("");
  const [namesC, setNamesC] = useState([]);
  const [nameCOptions, setNameCOptions] = useState([]);
  const [nameD, setNameD] = useState("");
  const [namesD, setNamesD] = useState([]);
  const [nameDOptions, setNameDOptions] = useState([]);
  const [fullName, setFullName] = useState("");
  const [fullNames, setFullNames] = useState([]);
  const [fullNamesOptions, setFullNamesOptions] = useState([]);

  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(dataName.map((r) => ({ name: r.name })));
      }
    };
    fetchData();
  };
  useEffect(() => {
    getData("namesA", setNameA, setNamesA, setNameAOptions);
    getData("namesB", setNameB, setNamesB, setNameBOptions);
    getData("namesC", setNameC, setNamesC, setNameCOptions);
    getData("namesD", setNameD, setNamesD, setNameDOptions);
    let rA = Math.floor(Math.random() * nameAOptions.length);
    let rB = Math.floor(Math.random() * nameBOptions.length);
    let rC = Math.floor(Math.random() * nameCOptions.length);
    let rD = Math.floor(Math.random() * nameDOptions.length);
  }, []);

  //combine nameA to namB to nameC to nameD
  const onGenerate = (e) => {
    let rA = Math.floor(Math.random() * nameAOptions.length);
    let rB = Math.floor(Math.random() * nameBOptions.length);
    let rC = Math.floor(Math.random() * nameCOptions.length);
    let rD = Math.floor(Math.random() * nameDOptions.length);
    if (
      nameAOptions !== undefined &&
      nameBOptions !== undefined &&
      nameCOptions !== undefined &&
      nameDOptions !== undefined
    ){
        setNameA(nameAOptions[rA].name);
        setNameB(nameBOptions[rB].name);
        setNameC(nameCOptions[rC].name);
        setNameD(nameDOptions[rD].name);
        if (nameA && nameB && nameC && nameD) {
            setFullName(nameA + " " + nameB + " " + nameC + " " + nameD);
          }
    }
    props.setValue(fullName);
  };
//   useEffect(() => {
//     onGenerate();
//   }, [props.value]);

  return <>{props.value}</>;
};

export default NameGenerator;
