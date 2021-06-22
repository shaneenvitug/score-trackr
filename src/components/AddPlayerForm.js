import { useState } from 'react'

const AddPlayerForm = (props) => {

    const [value, setValue] = useState('')

    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPlayer(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter a player's name"
                value={value}
                onChange={handleValueChange}
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    )
}

export default AddPlayerForm;