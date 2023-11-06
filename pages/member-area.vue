<template>
    <div>
    <!-- Page Heading -->
        <h1 class="h3 mb-2">Create Memmber</h1>

        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Employee Master Info</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="exampleFormControlInput1"><span class="text-danger">*</span> Employee Code</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="exampleFormControlSelect1"><span class="text-danger">*</span>Punch Code</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> First Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Last Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Mobile No</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Employee Reports To</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Allow Manual Attendance</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Role Template</label>
                            <input type="text" class="form-control">
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Personal Details </h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="exampleFormControlInput1"><span class="text-danger">*</span>Martial Status</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Married</option>
                                <option>Single</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="exampleFormControlSelect1"><span class="text-danger">*</span>Gender</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span>Date Of Birth</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Place Of Birth</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Cnic No</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span>Cnic Issuance Date</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Religion</label>
                            <input type="text" class="form-control">
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Address Information</h6>
                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Address</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Country</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Province</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span>City</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Area</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">ZipCode</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Emergency Contact Person</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">RelationShip</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Relative Mobile No</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">FamilyCode</label>
                            <input type="text" class="form-control">
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Office Information</h6>
                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Station</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Department</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">SubDepartment</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span>Designation</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Employee Status</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Cost Center</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Status</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">User ID</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Password</label>
                            <input type="text" class="form-control">
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Office Details</h6>
                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Region</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">GLClass</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Joining Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span>Confirmation Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Expected Confirmation Days</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Contract Start Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Contract End Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Resign Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Leaving Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Leaving Reason</label>
                            <input type="text" class="form-control">
                        </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Education</h6>
                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Institute</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Board / University</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Degree</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span>Passing Year</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Result </label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">GPA / CGPA</label>
                            <input type="text" class="form-control">
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 p-0 my-4">
                <div class="card shadow position-relative">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bank Information</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">

                            <div class="form-group col-md-4 ">
                                <label for="exampleFormControlSelect2">Accoun tNo</label>
                                <textarea class="form-control"></textarea>
                            </div>
                            <div class="form-group col-md-4 ">
                                <label for="exampleFormControlSelect2">Account Title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group col-md-4 ">
                                <label for="exampleFormControlSelect2">Bank</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group col-md-4 ">
                                <label for="exampleFormControlSelect2">Branch Code</label>
                                <input type="text" class="form-control">
                            </div>
                            </form>
                        </div>
                    </div>
                </div>


                <NuxtLink to="users" class="btn btn-primary my-4">Save And Continue</NuxtLink>



            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "member-area"
    }
</script>

<style scoped>

</style>