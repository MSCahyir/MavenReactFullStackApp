package com.msc.AddressSystem.controller;

import com.msc.AddressSystem.model.Address;
import com.msc.AddressSystem.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {
    @Autowired
    private AddressService addressService;

    @PostMapping("/add")
    public String add(@RequestBody Address address){
        addressService.saveAddress(address);
        return "New address is added";
    }

    @GetMapping("/getAll")
    public List<Address> list(){
        return addressService.getAllAddresses();
    }
}
