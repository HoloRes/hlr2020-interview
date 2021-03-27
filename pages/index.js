import Head from 'next/head';
import {useState, useEffect} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import {
	IconButton,
	Grid,
	AppBar,
	Toolbar,
	Drawer,
	useScrollTrigger,
	Slide,
	ListItem,
	List,
	ListItemText
} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/Menu';

export default function Home() {
	const [imageHtml, setImageHtml] = useState([]);
	const [menuHtml, setMenuHtml] = useState([]);

	const [showButtons, setShowButtons] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const trigger = useScrollTrigger();

	useEffect(() => {
		const images = [];
		for (let i = 0; i < 11; i++) {
			images.push(<img src={`/img/q${i + 1}.webp`}
							 key={i}
							 id={`question${i + 1}`}
							 alt={`Question ${i + 1}`}/>);
		}

		const menu = [];

		for (let i = 0; i < 11; i++) {
			menu.push(
				<Link to={`question${i + 1}`} spy={true} smooth={true} offset={-70} duration={1000} onClick={() => {setShowMenu(false)}}>
					<ListItem button>
						<ListItemText primary={`Question ${i + 1}`}/>
					</ListItem>
				</Link>
			);
		}

		setImageHtml(images);
		setMenuHtml(menu);
	}, [])

	return (
		<div>
			<Head>
				<title>HoloRewind 2020 - Interview</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main style={{display: 'grid'}}>
				{imageHtml}

				<Drawer anchor='left' open={showMenu} onClose={() => {
					setShowMenu(false)
				}}>
					<List style={{width: 250}}>
						{menuHtml}
					</List>
				</Drawer>

				<Slide appear={false} direction='up' in={!trigger}>
					<AppBar position='fixed' color='transparent' style={{top: 'auto', bottom: 0}}>
						<Toolbar>
							<Grid container justify='space-between'>
								<IconButton aria-label='Menu' title='Menu' onClick={() => {
									setShowMenu(true)
								}} style={{backgroundColor: "#33bfff"}}
											hidden={!showButtons}>
									<MenuIcon/>
								</IconButton>

								<IconButton aria-label='Scroll to top' title='Scroll to top'
											style={{backgroundColor: "#33bfff"}} onClick={() => {
									scroll.scrollToTop()
								}} hidden={!showButtons}>
									<ArrowUpwardIcon/>
								</IconButton>
							</Grid>
						</Toolbar>
					</AppBar>
				</Slide>
			</main>
		</div>
	)
}
