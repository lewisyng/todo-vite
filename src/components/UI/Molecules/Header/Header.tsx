import { FunctionComponent } from 'react';
import styles from './Header.module.scss';
import ColorSchemeSelect from '@Molecules/ColorSchemeSelect/ColorSchemeSelect';
import CreateNewBoard from '@Molecules/CreateNewBoard/CreateNewBoard';
import SelectBoard from '../SelectBoard/SelectBoard';
import { ModalUIProvider } from '@hooks/useModal';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header: FunctionComponent = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__actions}>
                <ModalUIProvider>
                    <SelectBoard />
                </ModalUIProvider>

                <ModalUIProvider>
                    <CreateNewBoard />
                </ModalUIProvider>

                <ModalUIProvider>
                    <ColorSchemeSelect />
                </ModalUIProvider>
            </div>

            <div>
                <Link to="/">
                    <Button variant="outlined" sx={{ color: 'white', border: '1px solid white' }}>
                        Dashboard
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
