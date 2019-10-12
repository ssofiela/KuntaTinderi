import React from 'react'
import {View, Button, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {addMessage, deleteMessage, changePost} from '../store/actions/actions'
import { ScrollView } from "react-navigation";
import { AntDesign } from '@expo/vector-icons';


class ShortPost extends React.Component {
    // 1C242B tumma väri



    render(){
        return(
            <View>
                <ScrollView>
                    <View style={{margin: 20, flexDirection: 'column', backgroundColor: '#F5E415'}}>
                        <Text style={{fontSize: 38, textAlign: 'center', margin: 20}}>Haluaisitko laskea nopeuksia koulun lähellä?</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Tarkempi kuvaus:</Text>
                            <Text>Pieniä ekaluokkalaisia on liikkeellä nyt enemmän kuin koskaan.</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Ketä koskee:</Text>
                            <Text>Nopeusrajoitus koskee enemmäkseen Myllymäen koulun aluetta,
                                mutta nopeusrajoituksia mietitään myös muiden koulujen lähistölle. </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Ketä koskee:</Text>
                            <Text>Nopeusrajoitus koskee enemmäkseen Myllymäen koulun aluetta,
                                mutta nopeusrajoituksia mietitään myös muiden koulujen lähistölle. </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Ketä koskee:</Text>
                            <Text>Nopeusrajoitus koskee enemmäkseen Myllymäen koulun aluetta,
                                mutta nopeusrajoituksia mietitään myös muiden koulujen lähistölle. </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Ketä koskee:</Text>
                            <Text>Nopeusrajoitus koskee enemmäkseen Myllymäen koulun aluetta,
                                mutta nopeusrajoituksia mietitään myös muiden koulujen lähistölle. </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Ketä koskee:</Text>
                            <Text>Nopeusrajoitus koskee enemmäkseen Myllymäen koulun aluetta,
                                mutta nopeusrajoituksia mietitään myös muiden koulujen lähistölle. </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Ketä koskee:</Text>
                            <Text>Nopeusrajoitus koskee enemmäkseen Myllymäen koulun aluetta,
                                mutta nopeusrajoituksia mietitään myös muiden koulujen lähistölle. </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.props.shorten()}><AntDesign name="upcircleo" size={64} color='#F5E415'/></TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    backButton: {
        borderRadius: 400,
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: '#F5E415',
        backgroundColor: '#F5E415',
    },
});

const mapStateToProps = state => {
    return {
        messages: state.messages,
        post: state.post
    }
};

const mapDispatchToProps = dispatch => {
    return{

        addMessage: () => dispatch(addMessage()),
        deleteMessage: () => dispatch(deleteMessage()),
        changePost: (post) => dispatch(changePost(post))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortPost);