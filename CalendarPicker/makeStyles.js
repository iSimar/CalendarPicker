/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
'use strict';

function makeStyles(scaler) {
  return {
    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },
    dayWrapper: {
      width: 50,
      height: 35,
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderWidth: 2,
      borderColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center'
    },

    dayButton: {
      width: 50,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },

    dayButtonSelected: {
      backgroundColor: '#5ce600',
      justifyContent: 'center',
      alignItems: 'center'
    },

    dayLabel: {
      fontSize: 16,
      color: '#000',
      // marginTop: 6*scaler/,
      justifyContent: 'center',
      alignItems: 'center'
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center'
    },

    dayLabels: {
      width: 50*scaler,
      fontSize: 16,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 60*scaler,
      height:60*scaler,
      backgroundColor: '#5ce600',
      borderRadius: 30*scaler,
      alignSelf: 'center'
    },

    monthLabel: {
      fontSize: 16,
      color: '#000',
      width: 180*scaler,
      textAlign: 'center'
    },

    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 10*scaler,
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthSelector: {
      width: 80*scaler
    },

    prev: {
      textAlign: 'left',
      fontSize: 16,
      color: '#990033',
    },

    next: {
      textAlign: 'right',
      fontSize: 16,
      color: '#990033',
    },

    yearLabel: {
      fontSize: 14*scaler,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledTextColor: {
      color: '#BBBBBB'
    },
    eventDotsContainer:{
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    eventDot: {
      marginLeft: 2,
      marginRight: 2,
      borderColor: 'transparent',
      width: 4,
      height: 4,
      borderRadius: 2
    }
  };
}


module.exports = makeStyles;
