package com.msc.AddressSystem.repository;

import com.msc.AddressSystem.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address,Integer> {

    @Query("select u from Address u where (u.city = :city and u.state = :state)")
    public Address findByCityAndState(@Param("city") String city,@Param("state") String state);
}
