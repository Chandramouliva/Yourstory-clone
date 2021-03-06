import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {filterBySearch} from "../Redux/DataRedux/actionCreator" 
import { useTranslation } from 'react-i18next';

function SearchBar(props) {
  const { t, i18n } = useTranslation();

    const { newsData } = props;
    const [ filterData, setFilterData] = useState(newsData)
    const [ query, setQuery ] = useState('');
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        setQuery(e.target.value)
        let data = newsData.filter((item)=>item.description.toLowerCase().indexOf(query) !== -1?true: false)
        setFilterData(data)
        console.log(filterData);
    }
    
    useEffect(() => {
        dispatch(filterBySearch(filterData))
        console.log(filterData);
      },[query]);

    console.log(query)
    return (
        <div>
        <div>        
        <TextField 
            id="outlined-search" 
            label={t('SearchPage.Filter')} 
            type="search" 
            variant="outlined" 
            value={query}
            onChange={handleSearch}
            style={{ background: "white", width: "30%", borderRadius: "5px" }}
        />
      </div>
      <div>
          <Button variant="contained" color="secondary" style={{background:"#ef4136",margin:"12px"}}>
          {t('SearchBar.CompaniesBtn')}
          </Button>
        </div>
  
    </div>
  );
}

export default SearchBar;
