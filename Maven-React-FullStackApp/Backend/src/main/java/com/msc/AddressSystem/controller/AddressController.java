package com.msc.AddressSystem.controller;

import com.msc.AddressSystem.model.Address;
import com.msc.AddressSystem.repository.AddressRepository;
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
    @Autowired
    private AddressRepository addressRepository;

    @PostMapping("/add")
    public String add(@RequestBody Address address){

        Address addressWithName = addressRepository.findByCityAndState(address.getCity(), address.getState());
        
        if(addressWithName == null)
        {
            addressService.saveAddress(address);
            return "New address is added";
        }
        System.out.println(addressWithName);
        return "Address is already added";
    }

    @GetMapping("/getAll")
    public List<Address> list(){
        return addressService.getAllAddresses();
    }
}
