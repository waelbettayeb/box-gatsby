import React from "react"
import {
  CalendarOutlined, CodeOutlined,
  EditOutlined,
  FacebookOutlined,
  FileUnknownOutlined, GlobalOutlined,
  InstagramOutlined, LikeOutlined,
  LinkedinOutlined,
  PlaySquareOutlined, VideoCameraOutlined,
} from "@ant-design/icons"

class Icon extends React.Component{

  render() {
    const { iconType } = this.props
    switch (iconType) {
      case "facebook":
        return <FacebookOutlined {...this.props}/>;
      case 'instagram':
        return <InstagramOutlined {...this.props}/>
      case 'linkedin':
        return <LinkedinOutlined {...this.props}/>
      case 'play-square':
        return <PlaySquareOutlined {...this.props}/>
      case 'like':
        return <LikeOutlined {...this.props}/>
      case 'code':
        return <CodeOutlined{...this.props}/>
      case 'edit':
        return <EditOutlined {...this.props}/>
      case 'global':
        return <GlobalOutlined {...this.props}/>
      case 'video-camera':
        return <VideoCameraOutlined {...this.props}/>
      case 'calendar':
        return <CalendarOutlined {...this.props}/>
      default:
        return <FileUnknownOutlined {...this.props}/>
    }

  }
}

export default Icon

