import React, { useEffect } from "react"
import styles from "./ProfilePage.module.css"
import Grid from "@material-ui/core/Grid"
import CreateIcon from '@material-ui/icons/Create';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import {FacebookBtn} from "../../Component/ProfileFolder/FacebookBtn";
import {LinkedInBtn} from "../../Component/ProfileFolder/LinkedInBtn"
import {TwitterBtn} from "../../Component/ProfileFolder/TwitterBtn"
import {ProfileFooter} from "../../Component/ProfileFolder/ProfileFooter"
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginData, loginOut } from "../../Redux/AuthRedux/actionCreators";
import { Avatar } from "@material-ui/core";

const ProfilePage = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(loginData())
    // },[])
    const userLoggedData = JSON.parse(localStorage.getItem("loginData"))
    console.log(userLoggedData)
    const cardData = [
        {
            "cardHeader":"Write your story",
            "cardData":"Submit an article to be published on MyStory",
            "cardLink":"GO TO"
        },
        {
            "cardHeader":"Edit Your Bio",
            "cardData":"Edit the author bio that is shown next to your stories and on your author page",
            "cardLink":"EDIT"
        },
        {
            "cardHeader":"Bookmarks",
            "cardData":"Find all articles that you have bookmarked",
            "cardLink":"GO TO"
        }
    ]

    const handleEditProfile = () => {
        console.log();
    }

    const handleGoToWriteStoryPage = () => {
        console.log();
        history.push('/mystorydatapage')
    }

    const handleGotoEditPage = () => {
        history.push("/bio")
    }
    const handleGoToBookMarksPage = () => {
        console.log();
        history.push('/bookmark')
    }
    const handlePassword = () => {
        console.log()
    }
    const handleLogOut = () => {
        dispatch(loginOut())
        history.push("/login");
    }

    return (
        <>
            <Grid xs = {12}>
                <div className = {styles.myAccountHeader} >My Account</div>
            </Grid>
            <div>
                <div className = {styles.upperBackground}>
                    <Grid className ={styles.userDataDiv}>
                        <Grid xs = {1}>
                            <Avatar className = {styles.userImg} src={userLoggedData.avatar_img} alt = {userLoggedData.username} />
                        </Grid>
                        <Grid className = {styles.table} xs = {3}>
                            <table>
                                <tbody>
                                    <tr><td className = {styles.name}> {userLoggedData.username}</td></tr>
                                    <tr><td className = {styles.email}> {userLoggedData.email}</td></tr>
                                    <tr><td className = {styles.editProfile} onClick = {handleEditProfile}>edit profile</td></tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.welcomeTag} xs = {12}>
                        Welcome Chandra Mouli
                    </Grid>
                    <Grid className = {styles.editCardsHeader} xs = {12}>
                        Control, customize, and secure your account, all in one place
                    </Grid>
                    <div className = {styles.redLineParent} > 
                        <div className = {styles.redLine}></div>
                    </div>
                    <Grid className = {styles.controleCards} container>

                        <Grid sm = {10} lg = {3} className = {styles.marginLeft85}>
                            <Paper elevation = {3} className = {styles.paper}>
                                
                                <div className = {styles.displayFlex} >
                                    <div>
                                        <CreateIcon color = "secondary" className = {styles.cardIcon} />
                                    </div>
                                    <div className = {styles.CardHeader} >
                                        {cardData[0].cardHeader}
                                    </div>
                                </div>
                                <div className = {styles.cardData}>{cardData[0].cardData}</div>
                                <div onClick = {handleGoToWriteStoryPage} className = {styles.cardLink}>{cardData[0].cardLink}</div>
                            </Paper>
                        </Grid>
                    <Grid sm = {10} lg = {3} className = {styles.marginLeft85}>
                        <Paper elevation = {3} className = {styles.paper}>

                            <div className = {styles.displayFlex} >
                                <div>
                                    <PermContactCalendarIcon color = "secondary" className = {styles.cardIcon} />
                                </div>
                                <div className = {styles.CardHeader} >
                                    {cardData[1].cardHeader}
                                </div>
                            </div>
                            <div className = {styles.cardData}>{cardData[1].cardData}</div>
                            <Grid>
                            <div onClick = {handleGotoEditPage} className = {styles.middleCardLink}>{cardData[1].cardLink}</div>
                            </Grid>
                        </Paper>
                    </Grid>
                        <Grid sm = {10} lg = {3} className = {styles.marginLeft85}>
                            <Paper elevation = {3} className = {styles.paper}>

                                <div className = {styles.displayFlex} >
                                    <div>
                                        <BookmarkIcon color = "secondary" className = {styles.cardIcon} />
                                    </div>
                                    <div className = {styles.CardHeader} >
                                        {cardData[2].cardHeader}
                                    </div>
                                </div>

                                <div className = {styles.cardData}>{cardData[2].cardData}</div>
                                <Grid>
                                <div onClick = {handleGoToBookMarksPage} className = {styles.cardLink}>{cardData[2].cardLink}</div>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className = {styles.profilePageSecondHalf}>

                    <Grid className = {styles.connectSocialHeader} xs = {11}>
                        Connect with Social Accounts
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                        <Grid xs = {10} md = {5} >
                            <p className = {styles.googleHeader}>You are connected to google</p>
                            <p className = {styles.googleSocialData}>You can now sign in to YourStory using your google account. 
                                We will never post to google or message your friends 
                                without your permission.
                            </p>
                        </Grid>
                        <Grid xs = {10} md = {3} ></Grid>
                        <Grid xs = {10} md = {4}>
                            <div className = {styles.displayFlexaddingLeft50}>
                                <div className = {styles.usersocialLeftSection} >
                                    <p className = {styles.userNameHeader}> {userLoggedData.username}</p>
                                    <p className = {styles.editProfile}>(disconect)</p>
                                </div>
                                <div>
                                <Avatar className = {styles.userImgSocial} src={ userLoggedData.avatar_img} alt =  {userLoggedData.username} />
                                </div>
                            </div>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                            <Grid item xs = {10} md = {6} >
                                <p className = {styles.googleHeader}>Connect to facebook</p>
                                <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                    without your permission.
                                </p>
                            </Grid>
                            <Grid xs = {10} md = {3} ></Grid>
                            <Grid item xs= {10} md = {3}>
                                <FacebookBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                            <Grid xs = {10} md = {6} >
                                <p className = {styles.googleHeader}>Connect to linkedin</p>
                                <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                    without your permission.
                                </p>
                            </Grid>
                            <Grid xs = {10} md = {3} ></Grid>
                            <Grid xs= {10} md = {3}>
                                <LinkedInBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                            <Grid xs = {10} md = {6} >
                                <p className = {styles.googleHeader}>Connect to twitter</p>
                                <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                    without your permission.
                                </p>
                            </Grid>
                            <Grid xs = {10} md = {3} ></Grid>
                            <Grid xs= {10} md = {3}>
                                <TwitterBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid xs = {10} md = {6} >
                            <p className = {styles.googleHeader}>Social Profile Visibility</p>
                            <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                without your permission.
                            </p>
                        </Grid>
                        
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid xs = {10} md = {6} >
                            <p className = {styles.googleHeader}>Add or Update Password</p>
                            <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                without your permission.
                            </p>
                        <Grid xs = {12} >
                            <button onClick = {handlePassword} className = {styles.addPswdBtn} >Add Password</button>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.logOutSection}>
                        <button onClick = {handleLogOut} className = {styles.addPswdBtn} >Log out</button>
                    </Grid>
                </div>

            </div>

            {/* <div>
                <ProfileFooter />
            </div> */}
        </>
    )
}

export {ProfilePage}