import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://url" />

                <Dropdown pointing="top left" text="Name">
                    <Dropdown.Menu>
                        <Dropdown.Item text="my information" icon="info" />
                        <Dropdown.Item onClick={signOut} text="sign out" icon="sign-out" />

                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>

        </div>
    )
}
