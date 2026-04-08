import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">My Account</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 bg-black text-white rounded-lg">
                  Dashboard
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Orders
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Addresses
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Payment Methods
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600">
                  Logout
                </a>
              </nav>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
                <p className="text-gray-600 mb-6">
                  Manage your account, view orders, and update your information.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Recent Orders</h3>
                    <p className="text-2xl font-bold text-black">0</p>
                    <p className="text-sm text-gray-600">No orders yet</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Saved Addresses</h3>
                    <p className="text-2xl font-bold text-black">0</p>
                    <p className="text-sm text-gray-600">No addresses saved</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Quick Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                      Browse Products
                    </button>
                    <button className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100 transition-colors">
                      Update Profile
                    </button>
                    <button className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100 transition-colors">
                      Add Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
