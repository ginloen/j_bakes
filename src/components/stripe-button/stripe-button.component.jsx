import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IGaIuKspRWqsE0cjEH657iZwx6StOYibTFyWMHXzJKMURkMstZ4Kq2vMhbYgNjSdeSfoDCWWB5ZRMKcYYiO2cXk002ZuYeaFi'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='J Bakes'
            billingAddress
            shippingAddress
            image='/images/croissant.png'
            description={`Your total is $${price}`}
            currency='SGD'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;