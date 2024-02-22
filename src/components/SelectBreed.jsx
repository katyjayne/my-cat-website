import { FormControl, InputLabel, Select } from "@mui/material"


function SelectBreed({selectedBreed, setSelectedBreed}) {
  return (
    <FormControl>
      <InputLabel id="breed-select-label">Breed</InputLabel>
      <Select
        labelId="breed-select-label"
        id="breed-select"
        value={selectedBreed}
        label=""
        onChange={(e) => setSelectedBreed(e.target.value)}
        />
    </FormControl>
  )
}

export default SelectBreed