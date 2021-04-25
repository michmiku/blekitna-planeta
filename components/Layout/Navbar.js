import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import NavigationButton from './NavigationButton';

const Navbar = () => {
    return (
        <nav className={styles.mainNav}>
            <div className={styles.logo}>
                <p>Błękitna Planeta</p>
                <a className={styles.logo}>
                    <Image src='/logo.png' alt='logo' width='40' height='40' />
                </a>
            </div>
            <NavigationButton
                parentLink=''
                link=''
                content='O nas'
                isAside={false}
                dropdowns={[]}
            />
            <NavigationButton
                parentLink=''
                link='aktualnosci'
                content='Aktualności'
                isAside={false}
                dropdowns={[]}
            />
            <NavigationButton
                parentLink=''
                link='porady'
                content='Porady'
                isAside={false}
                dropdowns={[
                    {
                        link: 'kacik-gromerski',
                        content: 'Kącik gromerski',
                        isAside: true,
                        dropdowns: []
                    },
                    {
                        link: 'okiem-akwarysty',
                        content: 'Okiem akwarysty',
                        isAside: true,
                        dropdowns: []
                    },
                    {
                        link: 'nasi-pupile',
                        content: 'Nasi Pupile',
                        isAside: true,
                        dropdowns: [
                            {
                                link: 'pies',
                                content: 'Pies',
                                isAside: true,
                                dropdowns: []
                            },
                            {
                                link: 'kot',
                                content: 'Kot',
                                isAside: true,
                                dropdowns: []
                            },
                            {
                                link: 'inne',
                                content: 'Inne',
                                isAside: true,
                                dropdowns: []
                            },
                        ]
                    },
                ]}
            />
            <NavigationButton
                parentLink=''
                link='nasze-realizacje'
                content='Nasze Realizacje'
                isAside={false}
                dropdowns={[
                    {
                        link: 'akwaria-morskie',
                        content: 'Akwaria morskie',
                        isAside: true,
                        dropdowns: []
                    },
                    {
                        link: 'akwaria-slodkowodne',
                        content: 'Akwaria słodkowodne',
                        isAside: true,
                        dropdowns: [
                            {
                                link: 'rybuoku',
                                content: 'Realizacja w stylu Rybuoku',
                                isAside: true,
                                dropdowns: []
                            },
                            {
                                link: 'slodkowodne',
                                content: 'Nasze akwaria słodkowodne',
                                isAside: true,
                                dropdowns: []
                            },
                        ]
                    },
                    {
                        link: 'terraria',
                        content: 'Terraria',
                        isAside: true,
                        dropdowns: [
                            {
                                link: 'rozne',
                                content: 'Różne gatunki',
                                isAside: true,
                                dropdowns: []
                            },
                            {
                                link: 'tropikalne',
                                content: 'Terraria tropikalne',
                                isAside: true,
                                dropdowns: []
                            },
                            {
                                link: 'pustynne',
                                content: 'Terraria pustynne',
                                isAside: true,
                                dropdowns: []
                            },
                        ]
                    },
                ]}
            />
            <NavigationButton
                parentLink=''
                link='kontakt'
                content='Kontakt'
                isAside={false}
                dropdowns={[]}
            />
        </nav>
    );
};

export default Navbar;