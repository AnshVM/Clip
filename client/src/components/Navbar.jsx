import React, { useState } from 'react'
import { Text, Icon, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

    const [searchBarWidth, setSearchBarWidth] = useState(16);

    const iconStyle = "pt-2 cursor-pointer text-black transform hover:scale-110 hover:text-black transition ease-linear duration-100"

    return (
        <div className="flex flex-row text-2xl px-52 pt-8 justify-between align-bottom">
            <Text className="pt-2 font-logo font-bold ">flick.gg</Text>
            <div className="flex flex-row gap-x-10 align-middle ">
                <InputGroup w={96} className="mr-20" >
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FontAwesomeIcon icon={faSearch} className="text-black" />}
                    />
                    <Input type="tel" placeholder="Search" />
                </InputGroup>
                <FontAwesomeIcon icon={faBell} className={iconStyle} />
                <FontAwesomeIcon icon={faUser} className={iconStyle} />
                <FontAwesomeIcon icon={faGamepad} className={iconStyle} />
            </div>
        </div>
    )
}