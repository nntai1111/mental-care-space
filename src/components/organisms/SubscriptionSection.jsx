import React from 'react';
import Button from '../atoms/Button';

const SubscriptionSection = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto my-12 text-center">
            <h2 className="text-2xl font-bold text-[#1A3C6A] mb-4">Đăng ký nhận tin</h2>
            <p className="text-gray-700 mb-6">
                Hãy là người đầu tiên nhận được cập nhật về nội dung mới nhất, ưu đãi đặc biệt và các tính năng mới.
            </p>
            <div className="flex justify-center gap-4">
                <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-[#8131ad]"
                />
                <Button>Đăng ký</Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
                Bằng cách đăng ký, bạn đồng ý nhận email tiếp thị từ chúng tôi. Bạn có thể hủy đăng ký bất kỳ lúc nào. Xem thêm chi tiết tại{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">
                    Chính sách quyền riêng tư
                </a>.
            </p>
        </div>
    );
};

export default SubscriptionSection;