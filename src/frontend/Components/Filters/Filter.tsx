import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Display from '../Display/Display';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox'; // Import Checkbox from Material-UI
import FormControlLabel from '@mui/material/FormControlLabel'; // Import FormControlLabel from Material-UI
import Button from '@mui/material/Button';
import './Filter.css';

const Filter = (props) => {
  const [alignment, setAlignment] = useState('mens wear');
  const [originaldata, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]); // State to store selected sizes

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('http://localhost:9000/products')
        .then((res) => {
          setOriginalData(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (originaldata.length === 0) {
      getData();
    }
  }, []);

  useEffect(() => {
    // Filter data based on selected sizes
    const filtered = originaldata.filter((item) => {
      return item.type === alignment && (selectedSizes.length === 0 || selectedSizes.includes(item.size));
    });
    setFilteredData(filtered);
  }, [alignment, originaldata, selectedSizes]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((item) => item !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  return (
    <div className='display-data'>
      <div className='toggle-fashion'>
        <ToggleButtonGroup color='primary' value={alignment} exclusive onChange={handleChange} aria-label='Platform'>
          <ToggleButton value='mens wear'>Men's</ToggleButton>
          <ToggleButton value='womens wear'>Women's</ToggleButton>
        </ToggleButtonGroup>
        <Button variant='contained' color='primary' onClick={() => setShowFilters(!showFilters)} style={{marginLeft:5}} >
          Filters
        </Button>
        {showFilters && (
          <div>
            <FormControlLabel
              control={<Checkbox checked={selectedSizes.includes('S')} onChange={() => handleSizeChange('S')} />}
              label='Small'
            />
            <FormControlLabel
              control={<Checkbox checked={selectedSizes.includes('M')} onChange={() => handleSizeChange('M')} />}
              label='Medium'
            />
            <FormControlLabel
              control={<Checkbox checked={selectedSizes.includes('L')} onChange={() => handleSizeChange('L')} />}
              label='Large'
            />
            <FormControlLabel
              control={<Checkbox checked={selectedSizes.includes('XL')} onChange={() => handleSizeChange('XL')} />}
              label='Extra Large'
            />
          </div>
        )}
      </div>
      <div>
        <Display data1={filteredData} />
      </div>
    </div>
  );
};

export default Filter;
