package com.msc.AddressSystem.service;

import com.msc.AddressSystem.model.Address;

import java.util.List;

public interface AddressService {
    public Address saveAddress(Address student);
    public List<Address> getAllAddresses();
}
