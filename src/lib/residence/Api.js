export async function initiateMpesaStkPush() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer 7luWmphZQlf1KG5ZZUbjjoXVVS9r");
  
    try {
      const response = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
        method: 'POST',
        headers,
        body: JSON.stringify({
          "BusinessShortCode": 174379,
          "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNzE1MTYzNDM4",
          "Timestamp": "20230715163438",
          "TransactionType": "CustomerPayBillOnline",
          "Amount": 1,
          "PartyA": 254745948636,
          "PartyB": 174379,
          "PhoneNumber": 254745948636,
          "CallBackURL": "https://mydomain.com/path",
          "AccountReference": "CompanyXLTD",
          "TransactionDesc": "Payment of X" 
        })
      });
  
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  