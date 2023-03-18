import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { StatusBarHeight } from '../../shared/variables'
import { Colors } from '../../shared/variables'

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: #fff;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`;

export const UpperContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

export const PageTitle = styled.Text`
    font-size: 25px;
    color: ${Colors.primary};
    font-weight: 700;
`;

export const Settings = styled.Image`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
`;

export const StyledList = styled.FlatList`
    flex: 1;
    /* padding: 10px; */
`;

export const StyledListItem = styled.Text`
    background-color: ${Colors.tertiary};
    color: ${Colors.text};
    font-size: 18px;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 5px;
`;