import { useState } from "react";
import { Link } from "react-router-dom"
import './signin.css'
import { Avatar, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: "#37474f",
		},
	},
	components: {
		// Name of the component
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,

			}
		},
	},

})
const Signin = () => {
	const [errorMessage, seterrorMessage] = useState(null);
	return (
		<>
			<div className='signin-1'>
				<div className='signin-2'>
					<Avatar sx={{ m: 1, mb: '35px', height: '77px', bgcolor: 'secondary.main', width: '77px' }}>
						<LockOutlinedIcon sx={{ height: '35px', width: '35px' }} />
					</Avatar>
					<form >
						<input type="email" name="email" placeholder="Email Address*" autoComplete="emailaddress" spellCheck="false" autoCorrect="off" autoCapitalize="off" id="id_email" />
						<div >
							<p className="error-message">
								{errorMessage}
							</p>
						</div>
						<input spellCheck="false" autoCorrect="off" autoCapitalize="off" type="password" name="password" autoComplete="password" data-cy="password" placeholder="Password" id="id_password" />
						<div>
							<p className="error-message">
								{errorMessage}
							</p>
						</div>
					</form>
					<ThemeProvider theme={theme}>
						<Button className="signin-3"
							type="submit"
							variant="contained"
							sx={{  backgroundColor: '#34474f', '&:hover': { backgroundColor: "#34474fd9" } }}
						>
							Sign In
						</Button>
					</ThemeProvider>
					<div className="signin-4">
						<Link to="/accounts/password/reset">
							Forget Password?
						</Link>
						<Link to="/accounts/signup">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Signin	