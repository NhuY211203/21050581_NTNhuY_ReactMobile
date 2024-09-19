import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';


  
export default function App() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 141.800; // Define price per unit

  const handleQuantityChange = (amount) => {
  setQuantity(quantity + amount);
  // Update the total price
  setTotalPrice((quantity + amount) * pricePerUnit); 
};
  
   const [totalPrice, setTotalPrice] = useState(141.800); // Initial price

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image
          source={{uri: ('https://picsum.photos/200/300/?blur=6')}} // Replace with actual image path
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productProvider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 ₫</Text>
          <Text style={styles.productOriginalPrice}>141.000 ₫</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange(1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Mua sau</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.discountCode}>
        <Text style={styles.discountCodeTitle}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity style={styles.viewDiscountCode}>
          <Text style={styles.viewDiscountCodeText}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.discountCodeInput}>
        <View style={styles.discountCodeInputContainer}>
          <View style={styles.discountCodeIcon} />
          <Text style={styles.discountCodeLabel} > Mã giảm giá </Text>
        </View>
        <TouchableOpacity style={styles.applyDiscountCode}>
          <Text style={styles.applyDiscountCodeText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.giftVoucher}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox? <Text style={styles.giftVoucherLink}>Nhập tại đây?</Text></Text>
      <View style={styles.priceSummary}>
        <Text style={styles.priceSummaryLabel}>Tạm tính</Text>
        <Text style={styles.priceSummaryValue}>{totalPrice} ₫</Text> </View>
      <View style={styles.priceSummary}>
        <Text style={styles.priceSummaryLabel}>Thành tiền</Text>
        <Text style={styles.priceSummaryValue}>{totalPrice} ₫</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  productInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 200,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productProvider: {
    fontSize: 14,
    marginBottom: 10,
     fontWeight:'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5,
  },
  productOriginalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginBottom: 10,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  buyButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  discountCodeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewDiscountCode: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  viewDiscountCodeText: {
    fontSize: 14,
    color: '#ccc',
  },
  discountCodeInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  discountCodeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountCodeIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  discountCodeLabel: {
    fontSize: 16,
  },
  applyDiscountCode: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  applyDiscountCodeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  giftVoucher: {
    fontSize: 14,
    marginBottom: 10,
  },
  giftVoucherLink: {
    color: '#007bff',
  },
  priceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  priceSummaryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceSummaryValue: {
    fontSize: 16,
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: '#ff5722',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});