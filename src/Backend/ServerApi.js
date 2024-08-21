const express = require('express');
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


const connectDB = require('./Connection')
connectDB()

const AddProductSchema = require('./AddProductSchema')
const Contact = require('./ContactSchema')
const Custadd = require('./CustomerRegisterSchema')
const Farmeradd = require('./FarmerSingupSchema')
const Deliveryadd = require('./DeliveryRegisterSchema')
const InventorySchema = require('./InventorySchema')

const bodyparser = require('body-parser');
const OrderSchema = require('./OrderSchema');
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())









//API to delete a record
app.delete("/removeproduct/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const { password } = req.body;

    console.log(pid);


    const user = await AddProductSchema.findOne({ password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (user.password === password) {
      AddProductSchema.findOneAndDelete({ pid })
        .then((deletedUser) => {
          if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
          }
          return res.json({ message: 'Product deleted successfully' });
        })

    }

  } catch (error) {
    return res.send(error)
  }
})

app.put('/manageorder/:orderid', (req, res) => {
  const { orderid } = req.params;
  const { status } = req.body;
  console.log(orderid);



  OrderSchema.findOneAndUpdate({ orderid }, { status }, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      //res.json(updatedUser);
    })
    .catch((error) => {
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'An error occurred' });
    });
});




app.put('/purchase/:pid', (req, res) => {
  const { pid } = req.params;
  const { status } = req.body;
  console.log(pid);



  AddProductSchema.findOneAndUpdate({ pid }, { status }, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    })
    .catch((error) => {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});



app.get('/inventory', async (req, res) => {
  try {
    // Find all people in the database
    InventorySchema.find()
      .then((products) => {
        // Display the fetched data in the terminal
        console.log(products);

        // Send the fetched data as the API response
        return res.json(products);

      })
  }
  catch (error) {
    res.send(error)
  }
});


app.get('/borders', async (req, res) => {
  try {
    // Find all people in the database
    OrderSchema.find({"status":"Not-Delivered"})
      .then((products) => {
        // Display the fetched data in the terminal
        console.log(products);

        // Send the fetched data as the API response
        return res.json(products);

      })
  }
  catch (error) {
    return res.send(error)
  }
});


app.get('/orderh', async (req, res) => {
  try {
    // Find all people in the database
    OrderSchema.find()
      .then((products) => {
        // Display the fetched data in the terminal
        console.log(products);

        // Send the fetched data as the API response
        return res.json(products);

      })
  }
  catch (error) {
    res.send(error)
  }
});







app.get('/orders', async (req, res) => {
  try {
    const { pass } = req.params;
    // Find all people in the database
    //const source = await OrderSchema.find({"name" : "sunita"});
    OrderSchema.find()
      .then((products) => {
        // Display the fetched data in the terminal
        console.log(products);

        // Send the fetched data as the API response8888888888888888888888888888888
        return res.json(products);

      })
  }
  catch (error) {
    res.send(error)
  }
});










//API to fetch products
app.get('/products', async (req, res) => {
  try {
    // Find all people in the database
    AddProductSchema.find()
      .then((products) => {
        // Display the fetched data in the terminal
        console.log(products);

        // Send the fetched data as the API response
        return res.json(products);

      })
  }
  catch (error) {
    return res.send(error)
  }
});










app.post('/farmerlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await Farmeradd.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }



});




app.post('/customerlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await Custadd.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (user.password == password) {
      return res.json({ message: 'Login successful' });

    }
    return res.status(401).json({ message: 'Invalid credentials' });
    // Login successful

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }



});






app.post('/businessmanlogin', async (req, res) => {
  const { email, password } = req.body;

  try {

    // Check if the password matches
    if (email != "business@gmail.com" && password != 'iamadmin') {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }



});




app.post('/deliverylogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await Deliveryadd.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }

});







app.post('/addproduct', async (req, res) => {
  var { pname, ppu, ppa, phone, password, qty } = req.body
  console.log(pname)
  try {
    const user = await Farmeradd.findOne({ password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (user.password == password) {
      const item = await AddProductSchema.create({
        pid: Math.floor(Math.random() * 10000),
        status: "Available",
        pname: pname,
        qty: qty,
        phone: phone,
        password: password,
        ppu: ppu,
        ppa: ppa,
        ttc: qty * ppu


      });
      await item.save();
    }

  } catch (error) {
    console.log(error)
  }

})

app.post('/conversion', async (req, res) => {
  var { pname, cost, qty, capacity } = req.body
  if (capacity == 1) {
    var idea = qty;
  } else {
    var idea = qty / 2;
  }
  console.log(pname)
  try {
    const item = await InventorySchema.create({
      inventoryid: Math.floor(Math.random() * 10000),
      pname: pname,
      cost: cost,
      qty: qty,
      capacity: capacity,
      presentlocation: 'Central Godown',
      Noofpackets: idea



    });
    await item.save();
  } catch (error) {
    console.log(error)
  }

})
















app.post('/addfeedback', async (req, res) => {
  var { fullname, email, message } = req.body
  console.log(fullname)
  try {
    const item = await Contact.create({
      messageid: Math.floor(Math.random() * 10000),
      fullname: fullname,
      email: email,
      message: message

    });
    await item.save();
  } catch (error) {
    console.log(error)
  }

})


app.post('/customersignup', async (req, res) => {
  var { fullname, email, pno, password } = req.body
  console.log(fullname)
  try {
    const item = await Custadd.create({
      custid: Math.floor(Math.random() * 10000),
      fullname: fullname,
      email: email,
      pno: pno,

      password: password

    });
    await item.save();
  } catch (error) {
    console.log(error)
  }

})

app.post('/farmersignup', async (req, res) => {
  var { fullname, email, phone, address, password, city } = req.body
  console.log(fullname)
  try {
    const item = await Farmeradd.create({
      farmerid: Math.floor(Math.random() * 10000),
      fullname: fullname,
      email: email,
      phone: phone,
      address: address,
      password: password,
      city: city

    });
    await item.save();
  } catch (error) {
    console.log(error)
  }

})


app.post('/deliverysignup', async (req, res) => {
  var { fullname, email, phone, address, password, city, adhar } = req.body
  console.log(fullname)
  try {
    const item = await Deliveryadd.create({
      deliveryguyid: Math.floor(Math.random() * 10000),
      fullname: fullname,
      email: email,
      phone: phone,
      address: address,
      password: password,
      city: city,
      adhar: adhar

    });
    await item.save();
  } catch (error) {
    console.log(error)
  }

})






app.post('/order', async (req, res) => {
  var { id,phone,address,password,qty } = req.body
  console.log(password)
  try {
    
    const user = await Custadd.findOne({ password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    if (user.password == password) {
      const item = await OrderSchema.create({
        orderid: Math.floor(Math.random() * 10000),
        status: "Not-Delivered",
        inventoryid: id,
        qty: qty,
        phone: phone,
        password: password,
        droplocation:address,
        picklocation:"Central Godown"
        


      });
      await item.save();
    }

  } catch (error) {
    console.log(error)
  }

})



app.listen(3001, () => {
  console.log('Server is running on port 3000');
});