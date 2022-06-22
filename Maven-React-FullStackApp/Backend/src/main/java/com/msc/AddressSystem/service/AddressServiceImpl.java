package com.msc.AddressSystem.service;

import com.msc.AddressSystem.model.Address;
import com.msc.AddressSystem.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address saveAddress(Address address) {

        String city = address.getCity();
        address.setCity(city.toUpperCase());

        return addressRepository.save(address);
    }

    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }
}
