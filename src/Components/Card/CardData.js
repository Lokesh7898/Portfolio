import React from 'react'
import Home from '../Pages/Home'

const CardData = () => {

    const dynamicData = [
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        },
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        },
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        },
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        },
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        },
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        },
        {
            title : "HTML",
            content : "Structure web pages with tags for content and functionality.",
            imgUrl : '',
        }
    ]

  return (
    <div>
      <Home data={dynamicData} />
    </div>
  )
}

export default CardData
