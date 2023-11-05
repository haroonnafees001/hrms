<template>
    <div>
    <!-- Page Heading -->
    <h1 class="h3 mb-2">Create User</h1>
    <div class="col-lg-12 p-0 my-4">
        <div class="card shadow position-relative">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Personal Details </h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="exampleFormControlInput1"><span class="text-danger">*</span> Employee Status</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Permenant</option>
                            <option>Contractual</option>
                            <option>Probation</option>
                            <option>Resigned</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="exampleFormControlSelect1"><span class="text-danger">*</span> Employee Group</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Staff Head Office</option>
                            <option>Finance</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Cost Center</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">Region</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">GL Class</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Joining Date</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">Confirmation Date</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">Expected Confirmation Days</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">Contract Start Date</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">Contract End Date</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label for="exampleFormControlSelect2">Resign Date</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="exampleFormControlSelect2">Leaving Date</label>
                        <input type="date" class="form-control">
                    </div>

                    <div class="form-group col-md-4">
                        <label for="exampleFormControlSelect2">Status</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="exampleFormControlSelect2">PositionType</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="exampleFormControlSelect2">Position</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-12">
                        <label for="exampleFormControlTextarea1">Leaving Reason</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="col-lg-12 p-0 my-4">
            <div class="card shadow position-relative">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Contact Details </h6>
                </div>
                <div class="card-body">
                    <div class="row">

                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Contact No.</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Region</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">GL Class</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2"><span class="text-danger">*</span> Skype ID</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Slack</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="exampleFormControlSelect2">Email Address</label>
                            <input type="text" class="form-control">
                        </div>

                        </form>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary my-4">Save And Continue</button>



        </div>
        <!-- /.container-fluid -->

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