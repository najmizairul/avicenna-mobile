import {useTailwind} from 'tailwind-rn';


import { View, Image } from 'react-native';

export function QRCode(
  props: { code?: string  },
) {
    const tailwind = useTailwind();

    return <View style={tailwind('h-32')}>
    <Image source={{ uri: "https://api.qrserver.com/v1/create-qr-code?qr=1&size=500x500&data=https://w3jmyvqzh3.sharedwithexpose.com/pharmacy/orders/code/"  + props.code }} style={{ width: 300, height: 300 }} />
  
  </View>;
}
