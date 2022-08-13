import React from 'react'
import IconLink from '../core/IconLink'
import Text from '../core/Text'
import Title from '../core/Title'

type HeadingWithText = {
    title: string;
    style?: string;
    text: string;
    label?: string;
}

export default function HeadingWithText({title, style, text, label} : HeadingWithText) {
  return (
    <>
        <Title title={title} style={style} />
        <Text text={text} />
        <IconLink label={label}/>
    </>
  )
}
