import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown} from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>

            <Dropdown item text='basket'>
                <Dropdown.Menu>
                    <Dropdown.Item>Acer laptop</Dropdown.Item>
                    <Dropdown.Item>Asus laptop</Dropdown.Item>
                    <Dropdown.Item>Dell laptop</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">go basket</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


        </div>
    )
}
