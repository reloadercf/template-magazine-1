import * as Colors from './colors'
import * as Spacing from './spacing'
export const extraLargeFontSize = 30
export const largeFontSize = 20
export const buttonFontSize = 18
export const baseFontSize = 16
export const smallFontSize = 14
export const smallestFontSize = 10
export const largeHeaderFontSize = 20
export const headerFontSize = 16
export const iconsize=20

const base = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
}
const baseColumn = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
}

export const contentRowCenter = {
  ...base,
  justifyContent: 'center',
}

const contentCenterColumn = {
  ...baseColumn,
  justifyContent: 'center',
}

const contentBetween = {
  ...base,
  justifyContent: 'center',
}


export const link = {
  color: Colors.thoughtbotRed,
  fontWeight: 'bold',
}

export const bodyText = {
  color: Colors.baseText,
  fontSize: baseFontSize,
  textAlign:"center",
  //lineHeight: 20,
  //padding: Spacing.large,
}


export const headerText = {
  color: Colors.darkText,
  fontSize: headerFontSize,
  fontWeight: 'bold',
}

export const tituloArticulo = {
  color: Colors.darkText,
  fontSize: smallFontSize,
  fontWeight: 'bold',
}


export const descriptionText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
}

export const screenHeader = {
  ...contentBetween,
  color: Colors.baseText,
  fontSize: extraLargeFontSize,
  fontWeight: 'bold',
}
export const SubtitleHeader = {
  ...contentBetween,
  color: Colors.baseText,
  fontSize: largeFontSize,
  fontWeight: 'bold',
}



export const screenFooter = {
  ...base,
  ...descriptionText,
}

export const sectionHeader = {
  ...base,
  ...headerText,
}

export const section={
  ...contentCenterColumn,
}

export const count = {
  ...base,
  ...descriptionText,
}